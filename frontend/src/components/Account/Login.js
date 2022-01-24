import React from "react";

import styled from "styled-components";

const LoginForm = styled.form`
  height: 500px;
  width: 500px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 5px;
`;

const InputForm = styled.div`
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const InputIdAndPw = styled.input`
  background-color: #e3e3ef;
  height: 40px;
  width: 300px;
  border-radius: 5px;
  border-color: transparent;
  margin-bottom: 10px;
  padding: 0px;
  placeholder: ${(props) => props.placeholder};
`;

const LoginBtn = styled(InputIdAndPw)`
  background-color: #6667ab;
  color: white;
  width: 300px;
`;

const FindIdOrPw = styled.a`
  color: black;
  text-decoration: none;
`;

const SocialLoginForm = styled.div``;

const SocialLogin = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: red;
  border-color: transparent;
  margin-right: 10px;
`;

const SeparateLine = styled.hr`
  display: inline-block;
  width: 200px;
`;

const GoToSignup = styled.a`
  color: blue;
  text-decoration: none;
`;

function Login() {
  return (
    <div>
      <LoginForm>
        Welcome Back!
        <InputForm>
          <InputIdAndPw placeholder="이메일 혹은 아이디" />
        </InputForm>
        <InputForm>
          <InputIdAndPw placeholder="비밀번호" />
        </InputForm>
        <div>
          <input type="checkbox" />
          아이디 저장
          <FindIdOrPw href="#">아이디, 비밀번호 찾기</FindIdOrPw>
        </div>
        <LoginBtn as="button">로그인</LoginBtn>
        <SeparateLine></SeparateLine> 또는 <SeparateLine></SeparateLine>
        <SocialLoginForm>
          <div>
            <SocialLogin />
            <SocialLogin />
            <SocialLogin />
          </div>
        </SocialLoginForm>
        아직 회원이 아니신가요?
        <GoToSignup href="#">회원가입</GoToSignup>
      </LoginForm>
    </div>
  );
}

export default Login;
