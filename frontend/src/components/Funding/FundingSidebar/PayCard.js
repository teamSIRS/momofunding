import styled from "styled-components";
import { MomoColor, MomoStrongColor } from "../../../shared/global";
import { InfoCard, Text } from "./CreatorCard/styles";
import axios from "axios";
import { useRecoilValue } from "recoil";
import setAuthorizationToken, { userIdState } from "../../../atoms";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import { baseUrl } from "../../../App";

const Card = styled(InfoCard)`
  height: auto;
  padding: 20px;
  margin: 30px 10px;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
`;

const SubTop = styled(Top)`
  justify-content: space-evenly;
`;

const Title = styled.p`
  font-size: 18px;
  line-height: 36px;
  margin: 0;
`;

const SubTitle = styled(Title)`
  font-size: 16px;
`;

const Space = styled.div`
  width: 55px;
`;

const TotalPrice = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  float: right;
  color: ${MomoColor};
`;

const SubTotalPrice = styled(TotalPrice)`
  font-size: 23px;
`;

const Check = styled.label`
  margin-top: 20px;
`;

const Input = styled.input`
  width: 14px;
  height: 14px;
`;

const Info = styled.span`
  font-size: 16px;
  padding-left: 10px;
`;

const LongText = styled.p`
  padding: 5px 34px;
  color: #7b7b7b;
`;

const FundingBtn = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 15px;
  :hover {
    background-color: ${MomoStrongColor};
  }
`;

function PayCard({ props }) {
  const userId = useRecoilValue(userIdState);
  const [isCheck, setIsCheck] = useState(false);

  //후원하기 버튼을 누르면 swagger에 써있는 requestbody의 정보들이 전부 같이 넘어가야함
  function getPayLink(event) {
    const checkInfo = () => {
      if (!isCheck) {
        swal("후원할 수 없습니다!", "약관에 동의해주세요", "warning");
        return false;
      }
      if (props.paySort !== "kakao") {
        swal("후원할 수 없습니다!", "결제 수단을 선택해주세요", "warning");
        return false;
      }
      if (props.name === "" || props.tel === "" || props.email === "") {
        swal(
          "후원할 수 없습니다!",
          "후원자 정보를 빠짐없이 입력해주세요.",
          "warning"
        );
        return false;
      }

      if (props.reward.isDeliver && props.shippingAddr === "") {
        swal(
          "후원할 수 없습니다!",
          "후원자 정보를 빠짐없이 입력해주세요.",
          "warning"
        );
        return false;
      }

      return true;
    };

    event.preventDefault();
    const getLink = async () => {
      if (!checkInfo()) return;
      // axios 요청
      await axios({
        url: "/payment/kakao", // 기본 url에 추가로 붙음 => 							 						http://localhost:8080/users/sign-in
        method: "post", // 요청 method => get, post, put, delete 선택
        data: {
          rewardId: props.reward.id,
          userId: userId,
          projectId: props.projectId,
          name: props.reward.name,
          content: props.reward.content,
          quantity: props.amount,
          optionContent: props.amount,
          recipientName: props.name,
          recipientTel: props.tel,
          recipientAddress: props.shippingAddr,
          requestContent: props.request,
          amount: props.total,
        },
        headers: setAuthorizationToken(),
        baseURL: baseUrl, // 위에서 말한 baseURL 설정
      }) // 여기까지가 axios 보내는 정보
        .then((response) => {
          const popUp = window.open(
            response.data.url,
            "카카오 페이 결제",
            "toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=400, height=600, top=0,left=0"
          );
        })
        .catch((error) => {
          // .catch는 axios 요청 실패시 작업
          console.log(error); // error 메세지 확인
        });
    };
    getLink();
  }

  {console.log(props)}
  return (
    <Card>
      <TopBox>
        <SubTop>
          <SubTitle>기본 후원 금액</SubTitle>
          <Space></Space>
          <SubTotalPrice>{props.fund}원</SubTotalPrice>
        </SubTop>
        <SubTop>
          <SubTitle>추가 후원 금액</SubTitle>
          <Space></Space>
          <SubTotalPrice>{props.extra}원</SubTotalPrice>
        </SubTop>
        <hr/>
        <Top>
          <Title>최종 후원 금액</Title>
          <Space />
          <TotalPrice>{props.lastTotal}원</TotalPrice>
        </Top>
      </TopBox>
      <Check>
        <Input
          type="checkbox"
          value={isCheck}
          onChange={(e) => setIsCheck(!isCheck)}
        />
        <Info>아래 내용에 동의합니다</Info>
      </Check>
      <LongText>
        전자상거래등에서의소비자보호에관한법률 등에 의한 제품의 하자 또는 오배송
        등으로 인한 청약철회의 경우에는 상품 수령 후 3개월 이내, 그 사실을 안 날
        또는 알 수 있었던 날로부터 30일 이내에 청약철회를 할 수 있으며, 반품
        비용은 통신판매업자가 부담합니다.
      </LongText>
      <FundingBtn onClick={getPayLink}>후원하기</FundingBtn>
    </Card>
  );
}

export default PayCard;
