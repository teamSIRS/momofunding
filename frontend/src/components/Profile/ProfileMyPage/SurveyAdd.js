import styled from "styled-components";

import { useState } from "react";
import { Button, Fade, Modal } from "react-bootstrap";
import SurveyNum from "./SurveyForm/SurveyNum";
import SurveyShortAns from "./SurveyForm/SurveyShortAns";
import SurveySelect from "./SurveyForm/SurveySelect";
import axios from "axios";
import { baseUrl } from "../../../App";

const SurveyModalBtn = styled.button`
  background-color: #6667ab;
  color: white;
  border: 0;
  outline: 0;
  margin-right: 10px;
`;
const SeparateLineForm = styled.div`
  display: flex;
  align-items: center;
`;

const SeparateLine = styled.hr`
  display: inline;
  width: 150px;
  margin: 10px;
`;

const styles = {
  bgColor: {
    backgroundColor: "#6667ab",
  },
};
const SurveyAddMain = styled.div``;

const SurveyAddDiv = styled.div``;

const SurveyAddInputBox = styled.div``;
const SurveyAddInput = styled.input``;
const SurveyAddInputSelect = styled.select``;
const SurveyAddLabel = styled.label`
  font-size: 20px;
  margin-right: 20px;
`;

const ExpirationDate = styled.input`
  margin: 10px 0 20px 0;
`;

function SurveyAdd() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedNum, setSelectedNum] = useState("선택하세요");
  const selectList = ["선택하세요", "객관식", "주관식"];
  const onChange = (event) => {
    setSelectedNum(event.target.value);
  };

  const [expirationDate, setExpirationDate] = useState("");
  const onExpirationDateChange = (event) =>
    setExpirationDate(event.target.value);

  const AddSurvey = async (data) => {
    console.log("설문조사 등록");
    await axios({
      url: "/survey-questions",
      method: "post",
      data: {
        surveyId: data.surveyId,
        questionTypeId: data.questionTypeId,
        title: data.title,
      },
      baseUrl: baseUrl,
    })
      .then((res) => {
        console.log(res.data);
        console.log("2", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <SurveyModalBtn onClick={handleShow}>추가</SurveyModalBtn>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={styles.bgColor} closeButton>
          <Modal.Title>설문조사 작성</Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "whitesmoke",
          }}
        >
          <SurveyAddMain>
            <SurveyAddDiv>
              <SurveyAddInputBox>
                <SurveyAddLabel>질문 양식 선택</SurveyAddLabel>
                <select onChange={onChange} value={selectedNum}>
                  {selectList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <hr />

                {/* 설문조사 종료일 등록 필! */}

                <SurveyAddLabel>
                  질문 내용
                  {selectedNum === "선택하세요" ? <SurveySelect /> : null}
                  {selectedNum === "객관식" ? <SurveyNum /> : null}
                  {selectedNum === "주관식" ? <SurveyShortAns /> : null}
                </SurveyAddLabel>
              </SurveyAddInputBox>
              <hr />

              <Button
                onClick={() => {
                  console.log(selectedNum);
                }}
              >
                등록
              </Button>
            </SurveyAddDiv>
          </SurveyAddMain>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SurveyAdd;
