import styled from "styled-components";
import { Content } from "./styles";

// content 전체 설정
const FundingContentBox = styled.div`
  margin-top: 50px;
  padding-left: 50px;
`;

// content - 후원금 추가
const FundingContentAddBox = styled.div``;
const FundingContentAddTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline 5px;
  text-decoration-color: #6667ab;
  margin-top: 80px;
`;
const FundingContentAddInputBox = styled.div`
  margin: 30px 0px;
`;
const FundingContentAddLabel = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 0px 20px;
  width: 80px;
`;
const FundingContentAddInput = styled.div`
  width: 250px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #e3e3ef;
  &:focus {
    outline: 1px solid #6667ab;
  }
`;

// content - 후원자 정보
const FundingContentInfoBox = styled.div``;
const FundingContentInfoTitle = styled(FundingContentAddTitle)``;
const FundingContentInfoInputBox = styled(FundingContentAddInputBox)``;
const FundingContentInfoLabel = styled(FundingContentAddLabel)``;
const FundingContentInfoInput = styled(FundingContentAddInput)``;

// content - 결제 정보
const FundingContentPayBox = styled.div``;
const FundingContentPayTitle = styled(FundingContentAddTitle)``;
const FundingContentPayInputBox = styled(FundingContentAddInputBox)`
  display: flex;
  align-items: center;
`;
const FundingContentPayLabel = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const FundingContentPayImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;
const FundingContentPayInput = styled.input`
  margin: 0px 20px;
`;

const styles = {
  input: {
    width: 350,
  },
};

export const FundingContent = () => (
  <Content sm={8}>
    <FundingContentBox>
      <FundingContentAddBox>
        <FundingContentAddTitle>후원금 추가</FundingContentAddTitle>
        <FundingContentAddInputBox>
          <FundingContentAddLabel as={"label"}>
            추가 금액
          </FundingContentAddLabel>
          <FundingContentAddInput as={"input"}></FundingContentAddInput>
        </FundingContentAddInputBox>
      </FundingContentAddBox>
      <FundingContentInfoBox>
        <FundingContentInfoTitle>후원자 정보</FundingContentInfoTitle>
        <FundingContentInfoInputBox>
          <FundingContentInfoLabel as={"label"}>이름</FundingContentInfoLabel>
          <FundingContentInfoInput as={"input"}></FundingContentInfoInput>
        </FundingContentInfoInputBox>
        <FundingContentInfoInputBox>
          <FundingContentInfoLabel as={"label"}>연락처</FundingContentInfoLabel>
          <FundingContentInfoInput as={"input"}></FundingContentInfoInput>
        </FundingContentInfoInputBox>
        <FundingContentInfoInputBox>
          <FundingContentInfoLabel as={"label"}>배송지</FundingContentInfoLabel>
          <FundingContentInfoInput
            as={"input"}
            style={styles.input}
          ></FundingContentInfoInput>
        </FundingContentInfoInputBox>
        <FundingContentInfoInputBox>
          <FundingContentInfoLabel as={"label"}>이메일</FundingContentInfoLabel>
          <FundingContentInfoInput
            as={"input"}
            style={styles.input}
          ></FundingContentInfoInput>
        </FundingContentInfoInputBox>
      </FundingContentInfoBox>
      <FundingContentPayBox>
        <FundingContentPayTitle>결제 정보</FundingContentPayTitle>
        <FundingContentPayInputBox>
          <FundingContentPayInput type="radio" name="kakao" value="kakao" />
          <FundingContentPayImg
            src="/socialLoginLogo/kakao-talk.png"
            alt="kakao"
          />
          <FundingContentPayLabel>카카오페이로 후원</FundingContentPayLabel>
        </FundingContentPayInputBox>
        <FundingContentPayInputBox>
          <FundingContentPayInput type="radio" name="naver" value="naver" />
          <FundingContentPayImg src="/socialLoginLogo/naver.png" alt="naver" />
          <FundingContentPayLabel>네이버페이로 후원</FundingContentPayLabel>
        </FundingContentPayInputBox>
        <FundingContentPayInputBox>
          <FundingContentPayInput
            type="radio"
            name="credit"
            value="credit"
          />
          <FundingContentPayImg
            src="/socialLoginLogo/credit.png"
            alt="credit"
          />
          <FundingContentPayLabel>신용카드 후원</FundingContentPayLabel>
        </FundingContentPayInputBox>
      </FundingContentPayBox>
    </FundingContentBox>
  </Content>
);
