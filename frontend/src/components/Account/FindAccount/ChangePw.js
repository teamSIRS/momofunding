import { Container, Info, ChangePwForm, Input, Btn } from "./styles";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../../../App";
import setAuthorizationEmailToken from "../../../atoms";
import Swal from "sweetalert2";

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
  margin-top: 30px;
  border-radius: 5px;
  background-color: #6c6db5;
  font-weight: bold;
`;

const FindAccountSeparateLine = styled.hr`
  width: 100%;
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
  align-self: start;
  font-size: 12px;
  color: red;
  margin-left: 30px;
`;

const ChangePwMain = styled.div`
  /* width: 500px;
  margin: auto; */
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      Swal.fire({
        position: "center",
        icon: "success",
        title: "비밀번호를 재설정 하였습니다.",
        text: "다시 로그인해주세요!",
        showConfirmButton: true,
        width: 750,
        confirmButtonText: "확인",
      });
      navigate("/");
    }
  };
  return (
    <div>
      <ChangePwMain>
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
          <ChangePwForm onSubmit={handleSubmit(onValid)}>
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
          </ChangePwForm>
        </Container>
      </ChangePwMain>
    </div>
  );
}
export default ChangePw;
