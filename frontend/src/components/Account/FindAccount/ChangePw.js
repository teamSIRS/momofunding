import { Container, Info, InputForm, Input, Btn } from "./styles";
import styled from "styled-components";

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

function ChangePw() {
  let newPw = "";
  let newPwCheck = "";

  function passCheck() {}

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
        <InputForm>
          <Input
            style={styles.input}
            placeholder="새로운 비밀번호"
            onChange={(e) => {
              // console.log(e.target.value);
              newPw = e.target.value;
              console.log(newPw);
            }}
          />
          <Input
            style={styles.input}
            placeholder="새로운 비밀번호 확인"
            onChange={(e) => {
              newPwCheck = e.target.value;
            }}
          />
          <Btn onClick={() => {}}>확인</Btn>
        </InputForm>
      </Container>
    </div>
  );
}
export default ChangePw;
