import { Container, Info, InputForm, Input, Btn } from "./styles";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../../../App";
import setAuthorizationEmailToken from "../../../atoms";
const ChangePwTitle = styled.div`
  margin: 50px;
  font-size: 30px;
  font-weight: bold;
`;

const Tabs = styled.div`
  width: 500px;
`;

const Tab = styled.span`
  display: inline-block;
  width: 150px;
  text-align: center;
  font-size: 15px;
  margin-left: 40px;
  margin-top: 30px;
  border-radius: 5px;
  background-color: #6c6db5;
  font-weight: bold;
`;

const FindAccountSeparateLine = styled.hr`
  width: 95%;
  margin: 0px auto;
  height: 15px;
  color: gray;
  &:not([size]) {
    height: 5px;
  }
  margin-bottom: 30px;
`;

const styles = {
  input: {
    borderRadius: 5,
  },
};

const ErrorMsg = styled.span`
  font-size: 12px;
  color: red;
`;

function ChangePw() {
  const { token } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm();

  function changePassword(data) {
    const changePassword = async () => {
      console.log(token);
      console.log(data);
      await axios({
        url: "/users/password",
        method: "PUT",
        data: {
          Authorization: token,
          password: data.password,
        },
        // headers: setAuthorizationEmailToken(token), // 비밀번호 재설정도 필요없음 CORS
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log("성공");
          console.log(response.data);
        })
        .catch((error) => {
          console.log("실패");
          console.log(error);
        });
    };
    changePassword();
  }

  const onValid = (data) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    } else {
      //재설정
      changePassword(data);
      alert("새로운 비밀번호로 로그인하세요.");
      navigate("/");
    }
  };
  return (
    <div>
      <ChangePwTitle>비밀번호 재설정</ChangePwTitle>
      <Tabs>
        <Tab>비밀번호 재설정</Tab>
      </Tabs>
      <FindAccountSeparateLine></FindAccountSeparateLine>
      <Container>
        <Info>
          비밀번호를 새로 설정해주세요.
          <br />
          그리고 다시 확인해주세요.
        </Info>
        <InputForm onSubmit={handleSubmit(onValid)}>
          <Input
            style={styles.input}
            placeholder="새로운 비밀번호"
            type="password"
            {...register("password", {
              required: "비밀번호는 필수입니다.",
            })}
          />
          <Input
            style={styles.input}
            placeholder="새로운 비밀번호 확인"
            type="password"
            {...register("passwordCheck", {
              required: "비밀번호체크는 필수입니다.",
            })}
          />
          <ErrorMsg>{errors?.passwordCheck?.message}</ErrorMsg>
          <Btn>비밀번호 재설정</Btn>
        </InputForm>
      </Container>
    </div>
  );
}
export default ChangePw;
