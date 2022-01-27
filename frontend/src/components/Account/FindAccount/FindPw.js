import { Container, Info, InputForm, Input, Btn } from "./styles";

const styles = {
  input: {
    borderRadius: 5,
  },
};

function FindPw() {
  return (
    <Container>
      <Info>
        아이디를 입력하시면 등록된 이메일로
        <br />
        비밀번호 재설정 링크를 보내드립니다.
      </Info>
      <InputForm>
        <Input style={styles.input} placeholder="아이디를 입력하세요" />
        <Btn>확인</Btn>
      </InputForm>
    </Container>
  );
}

export default FindPw;
