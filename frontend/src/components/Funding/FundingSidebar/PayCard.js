import styled from "styled-components";
import { MomoColor, MomoStrongColor } from "../../../shared/global";
import { InfoCard, Text } from "./CreatorCard/styles";
import axios from "axios";
import { rewardOrderState } from "../rewardOrderAtoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PaymentPortal from "./PaymentPortal";
import PaySuccess from "../PaySuccess";

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

function PayCard() {
  const [rewardOrderDto, setRewardOrder] = useRecoilState(rewardOrderState);
  const [isWindowOpened, setIsWindowOpened] = useState(false);

  function toggleWindow() {
    setIsWindowOpened((isWindowOpened) => !isWindowOpened);
  }

  async function goLinkPage(event) {
    event.preventDefault();
    let aaa = {
      rewardId: 1,
      userId: 5,
      projectId: 2,
      quantity: 2,
      optionContent: "2",
      recipientName: "옆집 철수네",
      recipientTel: "010-1111-1212",
      recipientAddress: "서울특별시 싸피동 옆집번지 철수네",
      requestContent: "개 키워요. 문 앞에 놔주시고 전화주세요.",
      amount: 50000,
    };
    await setRewardOrder(aaa);

    let myUrl;
    const getPayLink = async () => {
      // axios 요청
      const data = {
        quantity: 2,
        name: "Gold 리워드2",
        content: "골드 샴페인, 실버 샴페인233",
        amount: 50000,
      };
      try {
        myUrl = await axios.post("http://localhost:8080/payment/kakao", data);
        console.log(myUrl.data);

        const popUp = window.open(
          myUrl.data.url,
          "결제창",
          "width = 500, height = 500, top = 50, left = 50, location = no, status = no"
        );
      } catch (error) {
        console.log(error); // error 메세지 확인
      }
    };
    getPayLink();
    // toggleWindow();
  }
  const hello = () => {
    console.log(rewardOrderDto);

    // const popup = window.open(
    //   "http://localhost:3000/funding/paysuccess/",
    //   "결제창",
    //   "width = 500, height = 500, top = 50, left = 50, location = no, status = no"
    // );
  };

  // window.addEventListener("message", (e) => {
  //   console.log(e.data);
  // });

  return (
    <Card>
      <Top>
        <Title onClick={hello}>최종 후원 금액</Title>
        <Space />
        <TotalPrice>264,000원</TotalPrice>
      </Top>
      <Check>
        <Input type="checkbox" />
        <Info>아래 내용에 동의합니다</Info>
      </Check>
      <LongText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad rem, quia
        beatae odio eaque, adipisci doloribus, similique sapiente officiis
        pariatur consequatur repudiandae temporibus sit quo tempora placeat eius
        aut tempore id quas magnam. Excepturi non est ipsum iure. Illum quos
        possimus numquam perspiciatis accusamus earum quam rem sed in.
      </LongText>
      <FundingBtn onClick={goLinkPage}>후원하기</FundingBtn>
      {isWindowOpened && (
        <PaymentPortal>
          <PaySuccess />
        </PaymentPortal>
      )}
    </Card>
  );
}

export default PayCard;
