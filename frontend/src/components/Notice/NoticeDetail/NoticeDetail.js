import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const NoticeDetailMain = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 550px;
  padding: 60px 0px;
  position: relative;
`;

const NoticeDetailMainTitle = styled.div`
  margin: 50px;
  font-size: 30px;
  font-weight: bold;
`;

const NoticeDetailForm = styled.div``;

const NoticeDetailInputBox = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
`;
const NoticeDetailTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const NoticeDetailInput = styled.div`
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

const NoticeDetailTextarea = styled(NoticeDetailInput)`
  height: 200px;
`;

const NoticeDetailBtn = styled.div`
  float: right;
  padding: 5px 10px;
  margin-left: 10px;
  background-color: ${(props) => props.BtnBgColor};
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

function NoticeDetail() {
  return (
    <div>
      <NoticeDetailMainTitle>글 작성하기</NoticeDetailMainTitle>
      <Container>
        <Row style={styles.row}>
          <Col style={styles.col}>
            <NoticeDetailMain>
              <NoticeDetailForm>
                <NoticeDetailInputBox>
                  <NoticeDetailTitle>제목</NoticeDetailTitle>
                  <NoticeDetailInput as={"input"}></NoticeDetailInput>
                </NoticeDetailInputBox>

                <NoticeDetailInputBox>
                  <NoticeDetailTitle>내용</NoticeDetailTitle>
                  <NoticeDetailTextarea></NoticeDetailTextarea>
                </NoticeDetailInputBox>

                <NoticeDetailInputBox>
                  <NoticeDetailBtn as={"button"} BtnBgColor={"green"}>
                    글 수정
                  </NoticeDetailBtn>
                  <NoticeDetailBtn as={"button"} BtnBgColor={"red"}>
                    글 삭제
                  </NoticeDetailBtn>
                </NoticeDetailInputBox>
              </NoticeDetailForm>
            </NoticeDetailMain>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default NoticeDetail;
