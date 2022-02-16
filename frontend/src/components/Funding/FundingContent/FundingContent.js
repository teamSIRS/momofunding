import styled from "styled-components";
import { useEffect, useState } from "react";
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
const FundingContentAddInputBox = styled.label`
  margin: 30px 0px;
`;
const FundingContentAddLabel = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 0px 20px;
  width: 80px;
`;
const FundingContentAddInput = styled.input`
  width: 250px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #e3e3ef;
  &:focus {
    outline: 1px solid #6667ab;
  }
`;

// content - 후원자 정보
const FundingContentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 120%;
  height: auto;
`;
const FundingContentInfoTitle = styled(FundingContentAddTitle)``;
const FundingContentInfoInputBox = styled(FundingContentAddInputBox)`
  display: flex;
`;
const FundingContentInfoLabel = styled(FundingContentAddLabel)``;
const FundingContentInfoInput = styled(FundingContentAddInput)`
  width: 250px;
`;

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
  :selected{
    color: red;
  }
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

export const FundingContent = (props) => {
  const [extra, setExtra] = useState(0);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [shippingAddr, setShippingAddr] = useState("");
  const [request, setRequest] = useState("");
  const [email, setEmail] = useState("");
  const [payCheck, setPayCheck] = useState("");

  useEffect(()=>{
    props.getExtra(extra);
  }, [extra]);

  useEffect(()=>{
    props.getName(name);
  }, [name]);

  useEffect(()=>{
    props.getTel(tel);
  }, [tel]);

  useEffect(()=>{
    props.getShippingAddr(shippingAddr);
  }, [shippingAddr]);

  useEffect(()=>{
    props.getRequest(request);
  }, [request]);

  useEffect(()=>{
    props.getEmail(email);
  }, [email]);

  useEffect(()=>{
    props.getPaySort(payCheck);
  }, [payCheck]);

  return (
  <Content sm={8}>
    <FundingContentBox>

      <FundingContentAddBox>
        <FundingContentAddTitle>후원금 추가</FundingContentAddTitle>
        
        <FundingContentAddInputBox>
          <FundingContentAddLabel as={"label"}>
            추가 금액
          </FundingContentAddLabel>
          <FundingContentAddInput as={"input"}
            type="number" min="0" max="2000000000" step="1000"
            onChange={e => setExtra(e.target.value)}
            value = {extra}
          ></FundingContentAddInput>
        </FundingContentAddInputBox>

      </FundingContentAddBox>


      <FundingContentInfoBox>
        <FundingContentInfoTitle>후원자 정보</FundingContentInfoTitle>
        
        <FundingContentInfoInputBox>
          <FundingContentInfoLabel as={"label"}>이름</FundingContentInfoLabel>
          <FundingContentInfoInput as={"input"}
            onChange={e => setName(e.target.value)}
            value = {name}
          ></FundingContentInfoInput>
        </FundingContentInfoInputBox>
        
        <FundingContentInfoInputBox>
          <FundingContentInfoLabel as={"label"}>연락처</FundingContentInfoLabel>
          <FundingContentInfoInput as={"input"}
            onChange={e => setTel(e.target.value)}
            value = {tel}
          ></FundingContentInfoInput>
        </FundingContentInfoInputBox>

        { props.isDeliver
        ?
          <>
            <FundingContentInfoInputBox>
              <FundingContentInfoLabel as={"label"}>배송지</FundingContentInfoLabel>
              <FundingContentInfoInput
                as={"input"}
                style={styles.input}
                onChange={e => setShippingAddr(e.target.value)}
                value={shippingAddr}
              ></FundingContentInfoInput>
            </FundingContentInfoInputBox>

            <FundingContentInfoInputBox>
            <FundingContentInfoLabel as={"label"}>요청사항</FundingContentInfoLabel>
            <FundingContentInfoInput
              as={"input"}
              style={styles.input}
              onChange={e => setRequest(e.target.value)}
              value = {request}
            ></FundingContentInfoInput>
            </FundingContentInfoInputBox>
          </>
          
        :null
        }
        <FundingContentInfoInputBox>
          <FundingContentInfoLabel as={"label"}>이메일</FundingContentInfoLabel>
          <FundingContentInfoInput
            as={"input"}
            style={styles.input}
            onChange={e => setEmail(e.target.value)}
            value = {email}
          ></FundingContentInfoInput>
        </FundingContentInfoInputBox>
      </FundingContentInfoBox>


      <FundingContentPayBox>
        <FundingContentPayTitle>결제 정보</FundingContentPayTitle>

        <FundingContentPayInputBox>
          <FundingContentPayInput type="radio" name="payment" value="kakao" onChange={e => setPayCheck(e.target.value)}/>
          <FundingContentPayImg
            src="/socialLoginLogo/kakao-talk.png"
            alt="kakao"
            />
          <FundingContentPayLabel>카카오페이로 후원</FundingContentPayLabel>
        </FundingContentPayInputBox>

        {/* <FundingContentPayInputBox>
          <FundingContentPayInput type="radio" name="payment" value="naver" />
          <FundingContentPayImg src="/socialLoginLogo/naver.png" alt="naver" />
          <FundingContentPayLabel>네이버페이로 후원</FundingContentPayLabel>
        </FundingContentPayInputBox>

        <FundingContentPayInputBox>
          <FundingContentPayInput
            type="radio"
            name="payment"
            value="credit"
          />
          <FundingContentPayImg
            src="/socialLoginLogo/credit.png"
            alt="credit"
          />
          <FundingContentPayLabel>신용카드 후원</FundingContentPayLabel>
        </FundingContentPayInputBox>*/}

      </FundingContentPayBox>
    </FundingContentBox>
  </Content>
  );
};
