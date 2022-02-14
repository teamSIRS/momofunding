import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { baseUrl } from '../../../App';

const SignupBackGround = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

const SignupMainForm = styled.div`
  width: 600px;
  height: 700px;
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
  color: black;
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

const SignupBtn2 = styled.input`
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

const ErrorMsg = styled.span`
  font-size: 12px;
  color: red;
`;

const SuccessMsg = styled(ErrorMsg)`
  color: green;
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
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm();
  const [check, setCheck] = useState(false);
  const onChecked = () => setCheck((prev) => !prev);

  const onValid = (data) => {
    console.log("이메일 결과");
    console.log(emailResult);
    if (!emailResult) {
      setError("email", { message: "이메일 중복확인을 해주세요." });
      return;
    }

    if (!nicknameResult) {
      setError("nickname", {
        message: "닉네임 중복확인을 해주세요.",
      });
      return;
    }
    if (!data.check) {
      setError(
        "check",
        { message: "동의하기를 체크해주세요." },
        { shouldFocus: true }
      );
    }
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    } else {
      signup(data);
      console.log(data);
      navigate("/");
      setValue("email", "");
      setValue("nickname", "");
      setValue("password", "");
      setValue("passwordCheck", "");
    }
  };
  function signup(data) {
    const signup = async () => {
      await axios({
        url: "/users/sign-up",
        method: "post",
        data: {
          email: data.email,
          nickname: data.nickname,
          password: data.password,
        },
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    signup();
  }
  /////////////////////////////////////////////////////////////////////
  const [checkEmailValue, setCheckEmailValue] = useState("");
  const [checkNicknameValue, setCheckNicknameValue] = useState("");

  // 중복확인 했는지 여부
  const [emailResult, setEmailResult] = useState(false);
  const [nicknameResult, setNicknameResult] = useState(false);

  const [emailShow, setEmailShow] = useState(false);
  const [nicknameShow, setNicknameShow] = useState(false);
  /////////////////////////////////////////////////////////////////////

  const onEmailValueChange = (event) => {
    setCheckEmailValue(event.target.value);
  };
  const onNicknameValueChange = (event) => {
    setCheckNicknameValue(event.target.value);
  };
  /////////////////////////////////////////////////////////////////////
  function checkEmail() {
    const checkEmail = async () => {
      await axios({
        url: `/users/email/duplicate?email=${checkEmailValue}`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          setEmailShow(true);
          console.log(response.data);
          if (response.data.isExist) {
            return;
          } else {
            setEmailResult(true);
          }
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    checkEmail();
  }

  function checkNickname() {
    const checkNickname = async () => {
      await axios({
        url: `/users/nickname/duplicate?nickname=${checkNicknameValue}`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          setNicknameShow(true);
          console.log(response.data);
          if (response.data.isExist) {
            return;
          } else {
            setNicknameResult(true);
          }
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    checkNickname();
  }

  return (
    <SignupBackGround>
      <SignupMainForm>
        <SignupForm onSubmit={handleSubmit(onValid)}>
          <SignupTitle>회원가입</SignupTitle>

          <Container>
            <SignupInputDiv>
              <SignupInputsLabel>이메일[아이디]</SignupInputsLabel>
              <Row style={styles.row}>
                <Col style={styles.col} xs={10}>
                  <SignupInputs
                    as="input"
                    placeholder="example@email.com"
                    {...register("email", {
                      required: "이메일은 필수입니다.",
                    })}
                    value={checkEmailValue}
                    onChange={onEmailValueChange}
                  />
                  <ErrorMsg>{errors?.email?.message}</ErrorMsg>
                </Col>
                <Col style={styles.col} xs={2}>
                  <CheckBtns type={"button"} onClick={checkEmail}>
                    중복확인
                  </CheckBtns>
                </Col>
                {emailShow ? (
                  emailResult ? (
                    <SuccessMsg>가입 가능한 이메일입니다.</SuccessMsg>
                  ) : (
                    <ErrorMsg>이미 등록된 아이디입니다.</ErrorMsg>
                  )
                ) : null}
              </Row>
            </SignupInputDiv>
            <SignupInputDiv>
              <SignupInputsLabel>닉네임</SignupInputsLabel>
              <Row style={styles.row}>
                <Col style={styles.col} xs={10}>
                  <SignupInputs
                    as="input"
                    {...register("nickname", {
                      required: "닉네임은 필수입니다.",
                    })}
                    value={checkNicknameValue}
                    onChange={onNicknameValueChange}
                  />
                  <ErrorMsg>{errors?.nickname?.message}</ErrorMsg>
                </Col>
                <Col style={styles.col} xs={2}>
                  <CheckBtns type={"button"} onClick={checkNickname}>
                    중복확인
                  </CheckBtns>
                </Col>
                {nicknameShow ? (
                  nicknameResult ? (
                    <SuccessMsg>가입 가능한 닉네임입니다.</SuccessMsg>
                  ) : (
                    <ErrorMsg>이미 등록된 닉네임입니다.</ErrorMsg>
                  )
                ) : null}
              </Row>
            </SignupInputDiv>

            <SignupInputDiv>
              <SignupInputsLabel>비밀번호</SignupInputsLabel>
              <Row style={styles.row}>
                <Col style={styles.col} xs={12}>
                  <SignupInputs
                    as="input"
                    type="password"
                    placeholder="비밀번호"
                    {...register("password", {
                      required: "비밀번호는 필수입니다.",
                    })}
                  />
                  <ErrorMsg>{errors?.password?.message}</ErrorMsg>
                </Col>
                <Col style={styles.col} xs={12}>
                  <SignupInputs
                    as="input"
                    type="password"
                    placeholder="비밀번호 확인"
                    {...register("passwordCheck", {
                      required: "비밀번호체크는 필수입니다.",
                    })}
                  />
                  <ErrorMsg>{errors?.passwordCheck?.message}</ErrorMsg>
                </Col>
              </Row>
            </SignupInputDiv>

            <CheckBoxForm>
              <CheckBox>
                <input
                  id="check"
                  type="checkbox"
                  {...register("check", {
                    required: "동의하기를 체크해주세요.",
                  })}
                  onClick={onChecked}
                  value={check}
                />

                <CheckBoxLabel htmlFor="check">
                  위 약관에 동의합니다.
                </CheckBoxLabel>
                <br />
                <ErrorMsg>{errors?.check?.message}</ErrorMsg>
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
