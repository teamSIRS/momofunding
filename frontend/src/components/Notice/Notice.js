import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import NoticeList from "./NoticeList/NoticeList";

const NoticeMain = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 780px;
  padding: 60px 0px;
  position: relative;
`;

const NoticeMainTitle = styled.div`
  margin: 50px;
  font-size: 30px;
  font-weight: bold;
`;

const NoticeMainBtn = styled.div`
  margin: 10px;
  position: absolute;
  top: 5px;
  right: 5px;
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

function Notice() {
  return (
    <div>
      <NoticeMainTitle>공지사항</NoticeMainTitle>
      <Container>
        <Row style={styles.row}>
          <Col sm={12} style={styles.col}>
            <NoticeMain>
              <NoticeMainBtn as={"button"}>글 작성</NoticeMainBtn>
              <NoticeList />
            </NoticeMain>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Notice;
