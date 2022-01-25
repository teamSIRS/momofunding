import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const SignupBackGround = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

const SignupMainForm = styled.div`
  width: 600px;
  height: 750px;
  background-color: whitesmoke;
  border-radius: 10px;
`;

const SignupForm = styled.form`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupTitle = styled.label`
  display: block;
  align-self: flex-start;
  font-size: 30px;
  margin: 20px 0px;
  margin-left: 20px;
`;

const SignupInputDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  input:focus {
    outline: 1px solid #6667ab;
  }
`;

const SignupInputsLabel = styled.label`
  font-size: 15px;
  margin-bottom: 5px;
`;

const SignupInputs = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-color: transparent;
  padding-left: 10px;
  background-color: #e3e3ef;
`;

const CheckBtns = styled.button`
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #b0e0e6;
  &:hover {
    background-color: #8bdae3;
  }
`;

const CheckBoxForm = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const CheckBox = styled.div`
  display: inline-block;
  margin-right: auto;
`;

const CheckBoxLabel = styled.label`
  margin-left: 10px;
`;

const SignupBtn = styled(SignupInputs)`
  background-color: #6667ab;
  color: white;
  &:hover {
    background-color: #3c3d8b;
  }
`;

const SeparateLineForm = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px;
`;

const SeparateLine = styled.hr`
  display: inline;
  align-self: center;
  width: 40%;
  margin: auto;
`;

const SeparateLabel = styled.label``;

const SocialLoginForm = styled.div``;

const SocialLoginBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLoginLogo = styled.img`
  width: 50px;
  height: 50px;
  margin: 0px 15px;
`;

const styles = {
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
};

function Signup() {
  return (
    <SignupBackGround>
      <SignupMainForm>
        <SignupForm>
          <SignupTitle>회원가입</SignupTitle>

          <Container>
            <SignupInputDiv>
              <SignupInputsLabel>아이디</SignupInputsLabel>
              <Row style={styles.row}>
                <Col style={styles.col} xs={10}>
                  <SignupInputs as="input"></SignupInputs>
                </Col>
                <Col style={styles.col} xs={2}>
                  <CheckBtns>중복확인</CheckBtns>
                </Col>
              </Row>
            </SignupInputDiv>

            <SignupInputDiv>
              <SignupInputsLabel>닉네임</SignupInputsLabel>
              <Row style={styles.row}>
                <Col style={styles.col} xs={10}>
                  <SignupInputs as="input"></SignupInputs>
                </Col>
                <Col style={styles.col} xs={2}>
                  <CheckBtns>중복확인</CheckBtns>
                </Col>
              </Row>
            </SignupInputDiv>

            <SignupInputDiv>
              <SignupInputsLabel>비밀번호</SignupInputsLabel>
              <Row style={styles.row}>
                <Col style={styles.col} xs={12}>
                  <SignupInputs
                    as="input"
                    placeholder="비밀번호"
                  ></SignupInputs>
                </Col>
                <Col style={styles.col} xs={12}>
                  <SignupInputs
                    as="input"
                    placeholder="비밀번호 확인"
                  ></SignupInputs>
                </Col>
              </Row>
            </SignupInputDiv>

            <SignupInputDiv>
              <SignupInputsLabel>이메일</SignupInputsLabel>
              <Row style={styles.row}>
                <Col style={styles.col} xs={10}>
                  <SignupInputs
                    as="input"
                    placeholder="example@email.com"
                  ></SignupInputs>
                </Col>
                <Col style={styles.col} xs={2}>
                  <CheckBtns>인증하기</CheckBtns>
                </Col>
              </Row>
            </SignupInputDiv>

            <CheckBoxForm>
              <CheckBox>
                <input id="check" type="checkbox" />
                <CheckBoxLabel for="check">위 약관에 동의합니다.</CheckBoxLabel>
              </CheckBox>
            </CheckBoxForm>

            <SignupBtn as="button">회원가입</SignupBtn>
            <Col style={styles.col} xs={12}>
              <SeparateLineForm>
                <SeparateLine></SeparateLine>
                <SeparateLabel>또는</SeparateLabel>
                <SeparateLine></SeparateLine>
              </SeparateLineForm>
            </Col>
            <SocialLoginForm>
              <SocialLoginBtns>
                <SocialLoginLogo
                  src="/socialLoginLogo/facebook.png"
                  alt="fackbook-image"
                />
                <SocialLoginLogo
                  src="/socialLoginLogo/kakao-talk.png"
                  alt="kakao-talk-image"
                />
                <SocialLoginLogo
                  src="/socialLoginLogo/google.png"
                  alt="google-image"
                />
                <SocialLoginBtns />
              </SocialLoginBtns>
            </SocialLoginForm>
          </Container>
        </SignupForm>
      </SignupMainForm>
    </SignupBackGround>
  );
}

export default Signup;
