import axios from "axios";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import setAuthorizationToken, { roleState } from "../../../atoms";
import { useRecoilValue } from "recoil";
import { userIdState } from "../../../atoms";
import { baseUrl } from "../../../App";

const CreateNoticeMain = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 550px;
  padding: 60px 0px;
  position: relative;
`;
const CreateNoticeMainTitle = styled.div`
  margin: 60px 0 0;
  padding: 60px;
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
  background-color: #fffffc;
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
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userId = useRecoilValue(userIdState);
  const role = useRecoilValue(roleState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onContentChange = (event) => {
    setContent(event.target.value);
  };
  const goBackToList = () => {
    navigate("/notices");
  };
  const onValid = (data) => {
    createNotice(data);
  };

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
          navigate("/notices");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    createNotice();
  }

  return (
    <div>
      <Container>
        <Row style={styles.row}>
          <Col style={styles.col}>
            <CreateNoticeMainTitle>??? ????????????</CreateNoticeMainTitle>
            <CreateNoticeMain>
              <CreateNoticeForm onSubmit={handleSubmit(onValid)}>
                <CreateNoticeInputBox>
                  <CreateNoticeTitle>??????</CreateNoticeTitle>
                  <CreateNoticeInput
                    {...register("title", {
                      required: "????????? ???????????????.",
                    })}
                    value={title}
                    onChange={onTitleChange}
                  />
                </CreateNoticeInputBox>

                <CreateNoticeInputBox>
                  <CreateNoticeTitle>??????</CreateNoticeTitle>
                  <CreateNoticeTextarea
                    as={"textarea"}
                    {...register("content", {
                      required: "????????? ???????????????.",
                    })}
                    value={content}
                    onChange={onContentChange}
                  ></CreateNoticeTextarea>
                </CreateNoticeInputBox>

                <CreateNoticeInputBox>
                  <CreateNoticeBtn>??? ??????</CreateNoticeBtn>
                  <CreateNoticeBtn onClick={goBackToList}>??????</CreateNoticeBtn>
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
