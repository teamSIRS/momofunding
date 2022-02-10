import styled from "styled-components";
import { useState } from "react";
import { Container, Info, InputForm, Input, Btn } from "./styles";
import axios from "axios";
import { baseUrl } from "../../../App";
import { useNavigate } from "react-router-dom";

const Message = styled.div`
  margin: 30px;
  font-weight: bold;
  font-size: 20px;
`;

const Exist = styled.p`
  color: green;
`;

const NonExist = styled(Exist)`
  color: tomato;
`;

const styles = {
  input: {
    borderRadius: 5,
  },
};

function FindId() {
  const [email, setEmail] = useState("");
  const [isExist, setIsExist] = useState(false);
  const [show, setShow] = useState(false);
  const [test, setTest] = useState("");
  const navigate = useNavigate();
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  function checkEmail() {
    const checkEmail = async () => {
      await axios({
        url: `/users/email/duplicate?email=${email}`,
        method: "get",
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log(response.data);
          setShow(true);
          if (response.data.isExist) {
            setIsExist(true);
            setTest(email);
          } else {
            setIsExist(false);
            setTest(email);
            setEmail("");
          }
          navigate("/findAccount/findId");
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    checkEmail();
  }

  return (
    <Container>
      <Info>
        가입하셨던 이메일 계정을 입력하시면
        <br />
        가입 여부를 확인해드립니다.
      </Info>
      <InputForm>
        <Input
          style={styles.input}
          placeholder="이메일 계정"
          value={email}
          onChange={onEmailChange}
        />
        <Btn onClick={checkEmail} type="button">
          확인
        </Btn>
        {show ? (
          isExist ? (
            <Message>[ {test} ]는 가입된 회원입니다.</Message>
          ) : (
            <Message>[ {test} ]는 가입된 회원이 아닙니다.</Message>
          )
        ) : null}
      </InputForm>
    </Container>
  );
}

export default FindId;
