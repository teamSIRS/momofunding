import axios from "axios";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import setAuthorizationToken from "../../../atoms";

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

const CreateNoticeForm = styled.form``;

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
const CreateNoticeInput = styled.input`
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

const CreateNoticeBtn = styled.button`
  float: right;
  padding: 5px 10px;
  margin-left: 10px;
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
  const baseUrl = "http://localhost:8080";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm();

  //////////////////////////////////////////////////////
  // 나중에 직접 userId로 설정해야함
  const userId = 17;
  //////////////////////////////////////////////////////
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function createNotice(data) {
    const createNotice = async () => {
      await axios({
        url: `/notices`,
        method: "post",
        data: {
          userId: userId,
          title: data.title,
          content: data.content,
        },
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log("성공");
          console.log(response.data);
          navigate("/notices");
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    createNotice();
  }

  //////////////////////////////////////////////////////////////////////
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  const goBackToList = () => {
    navigate("/notices");
  };
  //////////////////////////////////////////////////////////////////////
  const onValid = (data) => {
    createNotice(data);
  };
  return (
    <div>
      <CreateNoticeMainTitle>글 작성하기</CreateNoticeMainTitle>
      <Container>
        <Row style={styles.row}>
          <Col style={styles.col}>
            <CreateNoticeMain>
              <CreateNoticeForm onSubmit={handleSubmit(onValid)}>
                <CreateNoticeInputBox>
                  <CreateNoticeTitle>제목</CreateNoticeTitle>
                  <CreateNoticeInput
                    {...register("title", {
                      required: "제목은 필수입니다.",
                    })}
                    value={title}
                    onChange={onTitleChange}
                  />
                </CreateNoticeInputBox>

                <CreateNoticeInputBox>
                  <CreateNoticeTitle>내용</CreateNoticeTitle>
                  <CreateNoticeTextarea
                    as={"textarea"}
                    {...register("content", {
                      required: "내용은 필수입니다.",
                    })}
                    value={content}
                    onChange={onContentChange}
                  ></CreateNoticeTextarea>
                </CreateNoticeInputBox>

                <CreateNoticeInputBox>
                  <CreateNoticeBtn>글 작성</CreateNoticeBtn>
                  <CreateNoticeBtn onClick={goBackToList}>목록</CreateNoticeBtn>
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
