import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Info, InputForm, Input, Btn } from "./styles";
import { baseUrl } from "../../../App";
import Swal from "sweetalert2";
const styles = {
  input: {
    borderRadius: 5,
  },
};

function FindPw() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  function sendEmail() {
    const sendEmail = async () => {
      await axios({
        url: `/users/email?email=${email}`,
        method: "post",
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    sendEmail();
    Swal.fire({
      position: "center",
      icon: "info",
      title: "이메일이 성공적으로 발송되었습니다.",
      text: "메인페이지로 이동합니다.",
      showConfirmButton: true,
      width: 750,
      confirmButtonText: "확인",
    });
    navigate("/");
  }
  return (
    <Container>
      <Info>
        아이디를 입력하시면 등록된 이메일로
        <br />
        비밀번호 재설정 링크를 보내드립니다.
      </Info>
      <InputForm>
        <Input
          style={styles.input}
          value={email}
          onChange={onEmailChange}
          placeholder="아이디를 입력하세요"
        />

        <Btn onClick={sendEmail}>확인</Btn>
      </InputForm>
    </Container>
  );
}

export default FindPw;
