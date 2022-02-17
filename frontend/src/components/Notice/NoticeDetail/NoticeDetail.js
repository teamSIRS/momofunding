import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import setAuthorizationToken from "../../../atoms";
import { useRecoilValue } from "recoil";
import { roleState } from "../../../atoms";
import { baseUrl } from "../../../App";

const NoticeDetailMain = styled.div`
  background-color: whitesmoke;
  width: 100%;
  min-height: 750px;
  padding: 60px 0px;
  position: relative;
`;
const NoticeDetailMainTitle = styled.div`
  padding: 60px;
  margin-top: 60px;
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
const NoticeDetailInput = styled.input`
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
const NoticeDetailBtn = styled.button`
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
  const navigate = useNavigate();
  const role = useRecoilValue(roleState);
  const isAdmin = role === "ADMIN";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onContentChange = (event) => {
    setContent(event.target.value);
  };
  const goBackToList = () => {
    navigate("/notices");
  };

  function getNotice() {
    const getNotice = async () => {
      await axios({
        url: `/notices/${id}`,
        method: "get",
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          setTitle(response.data.title);
          setContent(response.data.content);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getNotice();
  }
  function updateNotice(event) {
    event.preventDefault();
    const data = {
      title: title,
      content: content,
    };
    const updateNotice = async () => {
      await axios({
        url: `/notices/${id}`,
        method: "put",
        data: data,
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          navigate("/notices");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    updateNotice();
  }

  function deleteNotice() {
    const deleteNotice = async () => {
      await axios({
        url: `/notices/${id}`,
        method: "delete",
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          navigate("/notices");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    deleteNotice();
  }

  useEffect(() => {
    getNotice();
  }, []);
  return (
    <div>
      <Container>
        <Row style={styles.row}>
          <Col style={styles.col}>
            {isAdmin ? (
              <NoticeDetailMainTitle>글 수정, 삭제하기</NoticeDetailMainTitle>
            ) : (
              <NoticeDetailMainTitle>글 보기</NoticeDetailMainTitle>
            )}
            <NoticeDetailMain>
              <NoticeDetailForm>
                <NoticeDetailInputBox>
                  <NoticeDetailTitle>제목</NoticeDetailTitle>
                  <NoticeDetailInput
                    readOnly={isAdmin ? false : true}
                    value={title}
                    onChange={onTitleChange}
                  />
                </NoticeDetailInputBox>

                <NoticeDetailInputBox>
                  <NoticeDetailTitle>내용</NoticeDetailTitle>
                  <NoticeDetailTextarea
                    readOnly={isAdmin ? false : true}
                    as={"textarea"}
                    value={content}
                    onChange={onContentChange}
                  ></NoticeDetailTextarea>
                </NoticeDetailInputBox>

                <NoticeDetailInputBox>
                  {isAdmin && (
                    <>
                      <NoticeDetailBtn
                        onClick={deleteNotice}
                        BtnBgColor={"red"}
                      >
                        글 삭제
                      </NoticeDetailBtn>
                      <NoticeDetailBtn
                        onClick={updateNotice}
                        BtnBgColor={"green"}
                      >
                        글 수정
                      </NoticeDetailBtn>
                    </>
                  )}
                  <NoticeDetailBtn onClick={goBackToList}>목록</NoticeDetailBtn>
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
