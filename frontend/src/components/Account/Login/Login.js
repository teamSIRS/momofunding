import styled from "styled-components";

const LoginBackGround = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginMainForm = styled.div`
  width: 500px;
  height: 500px;
  background-color: whitesmoke;
  border-radius: 10px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GeneralLoginForm = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

const InputIdAndPw = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 5px;
  border-color: transparent;
  margin-bottom: 20px;
  padding-left: 10px;
  background-color: #e3e3ef;
  &:focus {
    outline: 1px solid #6667ab;
  }
`;

const LoginTitle = styled.label`
  font-size: 40px;
  margin: 30px 0px;
  align-self: center;
`;

const CheckBoxAndLink = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const CheckBox = styled.div`
  display: inline-block;
  margin-right: auto;
`;

const CheckBoxLabel = styled.label`
  margin-left: 10px;
`;

const FindIdOrPw = styled.div`
  display: inline-block;
  margin-left: auto;
  /* color: black;
  text-decoration: none; */
`;

const LoginBtn = styled(InputIdAndPw)`
  background-color: #6667ab;
  color: white;
`;

const SeparateLineForm = styled.div`
  display: flex;
  align-items: center;
`;

const SeparateLine = styled.hr`
  display: inline;
  width: 150px;
  margin: 10px;
`;

const SocialLoginForm = styled.div``;

const SocialLoginBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

const SocialLoginLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const GoToSiginupForm = styled.div``;

const GoToSignupMessage = styled.label`
  margin-right: 10px;
`;

const GoToSignup = styled.a`
  color: blue;
  text-decoration: none;
`;

function Login() {
  return (
    <LoginBackGround>
      <LoginMainForm>
        <LoginForm>
          <GeneralLoginForm>
            <LoginTitle>WelCome Back!</LoginTitle>
            <InputIdAndPw placeholder="이메일 혹은 아이디" />
            <InputIdAndPw placeholder="비밀번호" />

            <CheckBoxAndLink>
              <CheckBox>
                <input id="check" type="checkbox" />
                <CheckBoxLabel for="check">아이디 저장</CheckBoxLabel>
              </CheckBox>
              <FindIdOrPw>아이디, 비밀번호 찾기</FindIdOrPw>
            </CheckBoxAndLink>

            <LoginBtn as="button">로그인</LoginBtn>
          </GeneralLoginForm>
          <SeparateLineForm>
            <SeparateLine></SeparateLine> 또는 <SeparateLine></SeparateLine>
          </SeparateLineForm>
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
            <GoToSiginupForm>
              <GoToSignupMessage>아직 회원이 아니신가요?</GoToSignupMessage>
              <GoToSignup>아이디, 비밀번호 찾기</GoToSignup>
            </GoToSiginupForm>
          </SocialLoginForm>
        </LoginForm>
      </LoginMainForm>
    </LoginBackGround>
  );
}

export default Login;
