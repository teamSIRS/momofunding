import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const CreateNoticeMain = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 550px;
  padding: 60px 0px;
  position: relative;
`;

const CreateNoticeMainTitle = styled.div`
  margin: 50px;
  font-size: 30px;
  font-weight: bold;
`;

const CreateNoticeForm = styled.div``;

const CreateNoticeInputBox = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
`;
const CreateNoticeTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const CreateNoticeInput = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border-color: transparent;
  padding: 5px;
  background-color: #e3e3ef;
  &:focus {
    outline: 1px solid #6667ab;
  }
`;

const CreateNoticeTextarea = styled(CreateNoticeInput)`
  height: 200px;
`;

const CreateNoticeBtn = styled.div`
  float: right;
  padding: 5px 10px;
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

function CreateNotice() {
  return (
    <div>
      <CreateNoticeMainTitle>글 작성하기</CreateNoticeMainTitle>
      <Container>
        <Row style={styles.row}>
          <Col style={styles.col}>
            <CreateNoticeMain>
              <CreateNoticeForm>
                <CreateNoticeInputBox>
                  <CreateNoticeTitle>제목</CreateNoticeTitle>
                  <CreateNoticeInput as={"input"}></CreateNoticeInput>
                </CreateNoticeInputBox>

                <CreateNoticeInputBox>
                  <CreateNoticeTitle>내용</CreateNoticeTitle>
                  <CreateNoticeTextarea></CreateNoticeTextarea>
                </CreateNoticeInputBox>

                <CreateNoticeInputBox>
                  <CreateNoticeBtn as={"button"}>글 작성</CreateNoticeBtn>
                </CreateNoticeInputBox>
              </CreateNoticeForm>
            </CreateNoticeMain>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CreateNotice;
