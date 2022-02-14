import styled from "styled-components";
import { MomoColor, MomoStrongColor } from "../../../shared/global";
import { InfoCard, Text } from "./CreatorCard/styles";
import axios from "axios";

const Card = styled(InfoCard)`
  height: 440px;
  margin: 30px 10px;
`;

const Top = styled.div`
  display: flex;
`;

const Title = styled.p`
  font-size: 18px;
  line-height: 36px;
`;

const Space = styled.div`
  width: 55px;
`;

const TotalPrice = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${MomoColor};
`;

const Check = styled.label``;

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

function PayCard({rewardData}) {
  




  //후원하기 버튼을 누르면 swagger에 써있는 requestbody의 정보들이 전부 같이 넘어가야함
  function getPayLink(event) {
    const baseUrl = "http://localhost:8080";

    event.preventDefault();
    const getLink = async () => {
      // axios 요청
      await axios({
        url: "/payment/kakao", // 기본 url에 추가로 붙음 => 							 						http://localhost:8080/users/sign-in
        method: "post", // 요청 method => get, post, put, delete 선택
        data: {
          rewardId: 1,
          userId: 5,
          projectId: 2,
          name: "Gold 리워드2",
          content: "골드 샴페인, 실버 샴페인233",
          quantity: 2,
          optionContent: "2",
          recipientName: "옆집 철수네",
          recipientTel: "010-1111-1212",
          recipientAddress: "서울특별시 싸피동 옆집번지 철수네",
          requestContent: "개 키워요. 문 앞에 놔주시고 전화주세요.",
          amount: 50000,
        },
        baseURL: baseUrl, // 위에서 말한 baseURL 설정
      }) // 여기까지가 axios 보내는 정보
        .then((response) => {
          // .then은 axios 요청 성공시 작업
          // console.log(response.data.url); //카카오 페이 링크 주소값

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

  return (
    <Card>
      <Top>
        <Title>최종 후원 금액</Title>
        <Space />
        <TotalPrice>264,000원</TotalPrice>
      </Top>
      <Check>
        <Input type="checkbox" />
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
