import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useRecoilState } from "recoil";
import { nicknameState, isLoginState, userIdState } from "../../../../../atoms";
import swal from 'sweetalert';
import { baseUrl } from '../../../../../App';

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

const FindIdOrPw = styled.input`
  display: inline-block;
  margin-left: auto;
  color: black;
  background-color: transparent;
  /* color: black;
  text-decoration: none; */
`;

const LoginBtn = styled(InputIdAndPw)`
  background-color: #6667ab;
  color: white;
  &:hover {
    background-color: #3c3d8b;
  }
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
  &:hover {
    cursor: pointer;
  }
`;

const styles = {
  bgColor: {
    backgroundColor: "whitesmoke",
  },
};

const LoginModalBtn = styled.button`
  background-color: #6667ab;
  color: white;
  border: 0;
  outline: 0;
  &:hover {
    color: blue;
  }
`;

function LoginButton() {
  const navigate = useNavigate();
  const goToFind = () => {
    navigate("/findAccount/findId");
    setShow(false);
  };
  const goToSignup = () => {
    navigate("/signup");
    setShow(false);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [nickname, setNickname] = useRecoilState(nicknameState);
  // 로그인
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [userId, setUserId] = useRecoilState(userIdState);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function signin(event) {
    event.preventDefault();
    const signin = async () => {
      await axios({
        url: "/users/sign-in",
        method: "post",
        data: {
          email: email,
          password: password,
        },
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          const token = response.data.token;
          localStorage.setItem("auth-token", token);

          setUserId(response.data.id);
          setNickname(response.data.nickname);
          setIsLogin(true);
          navigate("/");
          setShow(false);
        })
        .catch((error) => {
          console.log(error);
          swal('로그인 실패',"아이디와 비밀번호를 확인하세요", "warning", {button: false});
        });
    };
    signin();
  }

  const onEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("엔터나와랏!");
      signin();
    }
  };
  return (
    <>
      <LoginModalBtn onClick={handleShow}>로그인</LoginModalBtn>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={styles.bgColor} closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "whitesmoke",
          }}
          closeButton
        >
          <LoginBackGround>
            <LoginMainForm>
              <LoginForm>
                <GeneralLoginForm>
                  <LoginTitle>Welcome Back!</LoginTitle>
                  <InputIdAndPw
                    placeholder="이메일"
                    value={email}
                    onChange={onEmailChange}
                  />
                  <InputIdAndPw
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={onPasswordChange}
                    onKeyDown={onKeyDown}
                  />
                  <CheckBoxAndLink>
                    <CheckBox>
                      <input id="check" type="checkbox" />
                      <CheckBoxLabel htmlFor="check">아이디 저장</CheckBoxLabel>
                    </CheckBox>
                    <FindIdOrPw as="a" onClick={goToFind}>
                      아이디, 비밀번호 찾기
                    </FindIdOrPw>
                  </CheckBoxAndLink>

                  <LoginBtn as="button" onClick={signin}>
                    로그인
                  </LoginBtn>
                </GeneralLoginForm>
                <SeparateLineForm>
                  <SeparateLine></SeparateLine> 또는
                  <SeparateLine></SeparateLine>
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
                    <GoToSignupMessage>
                      아직 회원이 아니신가요?
                    </GoToSignupMessage>
                    <GoToSignup onClick={goToSignup}>회원가입</GoToSignup>
                  </GoToSiginupForm>
                </SocialLoginForm>
              </LoginForm>
            </LoginMainForm>
          </LoginBackGround>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginButton;
