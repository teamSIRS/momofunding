import styled from "styled-components";
import { Content } from "./styles";

const FundingContentBox = styled.div`
  margin-top: 50px;
`;

const FundingContentAddBox = styled.div``;
const FundingContentAddTitle = styled.div``;
const FundingContentAddInputBox = styled.div``;
const FundingContentAddLabel = styled.label``;
const FundingContentAddInput = styled.input``;

const FundingContentInfoBox = styled.div``;
const FundingContentInfoTitle = styled.div``;
const FundingContentInfoInputBox = styled.div``;
const FundingContentInfoLabel = styled.label``;
const FundingContentInfoInput = styled.input``;

const FundingContentPayBox = styled.div``;
const FundingContentPayTitle = styled.div``;

export const FundingContent = () => (
  <Content sm={8}>
    <FundingContentBox>
      <FundingContentAddBox>
        <FundingContentAddTitle>후원금 추가</FundingContentAddTitle>
        <FundingContentAddInputBox>
          <FundingContentAddLabel>추가 금액</FundingContentAddLabel>
          <FundingContentAddInput></FundingContentAddInput>
        </FundingContentAddInputBox>
      </FundingContentAddBox>
      =============================
      <FundingContentInfoBox>
        <FundingContentInfoTitle>후원자 정보</FundingContentInfoTitle>
        <FundingContentInfoInputBox>
          <FundingContentInfoLabel>이름</FundingContentInfoLabel>
          <FundingContentInfoInput></FundingContentInfoInput>
          <FundingContentInfoLabel>연락처</FundingContentInfoLabel>
          <FundingContentInfoInput></FundingContentInfoInput>
          <FundingContentInfoLabel>배송지</FundingContentInfoLabel>
          <FundingContentInfoInput></FundingContentInfoInput>
          <FundingContentInfoLabel>이메일</FundingContentInfoLabel>
          <FundingContentInfoInput></FundingContentInfoInput>
        </FundingContentInfoInputBox>
      </FundingContentInfoBox>
      <FundingContentPayBox></FundingContentPayBox>
      =============================
      <FundingContentPayBox>
        <FundingContentPayTitle></FundingContentPayTitle>
      </FundingContentPayBox>
    </FundingContentBox>
  </Content>
);
