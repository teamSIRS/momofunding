import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NoticeList from "./NoticeList/NoticeList";
import { useRecoilValue } from "recoil";
import { roleState } from "../../atoms";

const NoticeMain = styled.div`
  /* background-color: whitesmoke; */
  width: 100%;
  height: 780px;
  padding: 60px 0px;
  position: relative;
`;

const NoticeMainTitle = styled.div`
  margin-left: 10px;
  margin-top: 80px;
  font-size: 30px;
  font-weight: bold;
`;

const NoticeMainSubTitle = styled(NoticeMainTitle)`
  margin-top: 20px;
  font-size: 15px;
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
  const navigate = useNavigate();
  const role = useRecoilValue(roleState);
  const isAdmin = role === "ADMIN";
  const GoToCreateNotice = () => {
    navigate("/notices/create");
  };
  return (
    <div>
      <Container>
        <NoticeMainTitle>공지사항</NoticeMainTitle>
        <NoticeMainSubTitle>
          공지사항은 관리자만 작성가능합니다.
        </NoticeMainSubTitle>
        <Row style={styles.row}>
          <Col sm={12} style={styles.col}>
            <NoticeMain>
              {isAdmin && (
                <NoticeMainBtn as={"button"} onClick={GoToCreateNotice}>
                  글 작성
                </NoticeMainBtn>
              )}
              <NoticeList />
            </NoticeMain>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Notice;
