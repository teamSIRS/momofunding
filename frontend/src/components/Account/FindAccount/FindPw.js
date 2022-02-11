import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Info, InputForm, Input, Btn } from "./styles";

const styles = {
  input: {
    borderRadius: 5,
  },
};

function FindPw() {
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8080";
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
