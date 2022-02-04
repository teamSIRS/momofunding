import styled from "styled-components";

import { useState } from "react";
import { Button, Fade, Modal } from "react-bootstrap";
import SurveyNum from "./SurveyForm/SurveyNum";
import SurveyShortAns from "./SurveyForm/SurveyShortAns";

const SurveyModalBtn = styled.button`
  background-color: #6667ab;
  color: white;
  border: 0;
  outline: 0;
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

const SurveyAddForm = styled.form``;

const SurveyAddInputBox = styled.div``;
const SurveyAddInput = styled.input``;
const SurveyAddInputSelect = styled.select``;
const SurveyAddLabel = styled.label``;

function SurveyAdd() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedNum, setSelectedNum] = useState("");
  const selectList = ["객관식", "주관식"];
  const onChange = (event) => {
    setSelectedNum(event.target.value);
    console.log(selectedNum);
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
            <SurveyAddForm>
              <SurveyAddInputBox>
                <SurveyAddLabel>질문 양식 선택</SurveyAddLabel>
                <select onChange={onChange} value={selectedNum}>
                  {selectList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <br />
                <SurveyAddLabel>질문 내용</SurveyAddLabel>
                <br />
                {selectedNum === "객관식" ? <SurveyNum /> : null}
                {selectedNum === "주관식" ? <SurveyShortAns /> : null}
                <SurveyAddInput placeholder="질문을 입력하세요."></SurveyAddInput>
              </SurveyAddInputBox>
              <Button>등록</Button>
            </SurveyAddForm>
          </SurveyAddMain>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SurveyAdd;
