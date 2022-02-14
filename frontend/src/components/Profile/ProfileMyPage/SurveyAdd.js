import styled from "styled-components";
import { useParams } from 'react-router-dom';
import React, { useState } from "react";
import { Button, Fade, Modal } from "react-bootstrap";
import SurveyNum from "./SurveyForm/SurveyNum";
import SurveyShortAns from "./SurveyForm/SurveyShortAns";
import SurveySelect from "./SurveyForm/SurveySelect";
import axios from "axios";
import { baseUrl } from '../../../App';
import setAuthorizationToken from '../../../atoms';
import swal from 'sweetalert';

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


//========================================

const SurveyAnsLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px;
`;

const SurveyAnsInput = styled.div`
  input {
    width: 470px;
    margin-bottom: 15px;
    border-radius: 5px;
    border-color: transparent;
    padding: 5px;
    background-color: #e3e3ef;
    &:focus {
      outline: 1px solid #6667ab;
    }
  }
`;

//=======================================


function SurveyAdd({surveys, Survey}) {
  const {id} = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [expirationDate, setExpirationDate] = useState("");
  const onExpirationDateChange = (event) =>
  setExpirationDate(event.target.value);

  const [endDate, setEndDate] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [type, setType] = useState(0);
  const [questTitle, setQuestTitle] = useState();

  const AddSurvey= async() => {
    // console.log('설문조사 등록');
    await axios({
      url: `${baseUrl}/surveys`,
      method: "post",
      data:{
        projectId: id,
        title: title,
        content: content,
        endDate: endDate,
      },
      headers: setAuthorizationToken(),
    })
      .then((res)=>{
        // console.log('ok');
        Survey();
      })
      .catch((e) => {
        console.log(e);
        swal('양식을 정확히 입력해주세요', {icon:"warning"});
      })
  }

  const AddSurveyQuest = async(id, type, title) =>{
    await axios({
      url: `${baseUrl}/survey-questions`,
      method: "post",
      data:{
        surveyId: id,
        questionType: type,
        //객관식1 주관식2
        title: title,
      },
      headers: setAuthorizationToken(),
    })
    .then((res)=>{
      console.log('콘텐트 등록');
    })
    .catch((err) =>{
      console.log(err);
    })
  };


  const [selectedNum, setSelectedNum] = useState("선택하세요");
  const selectList = ["선택하세요", "객관식", "주관식"];
  const onChange = (event) => {
    setSelectedNum(event.target.value);
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

          {/*  */}
          <SurveyAddMain>
          <SurveyAddDiv>
          <form>
            <SurveyAnsLabel>[ 설문조사 종료 일시 및 제목 ]</SurveyAnsLabel>
            <SurveyAnsInput>
              <input
                type="datetime-local"
                required
                onChange={(e) =>{setEndDate(e.target.value);}}
              />
            </SurveyAnsInput>
            <SurveyAnsInput>
              <input
                required
                placeholder="설문조사 제목"
                onChange={(e) =>{
                  setTitle(e.target.value)
                }}
              />
            </SurveyAnsInput>
            <SurveyAnsInput>
              <input
                required
                placeholder="설문조사 설명"
                onChange={(e) =>{
                  setContent(e.target.value)
                }}
              />
            </SurveyAnsInput>
            <Button onClick={()=>{AddSurvey();}}>질문 등록</Button>
          </form>
          <br/> 
        {/*  */}

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

                <SurveyAddLabel>
                  {selectedNum === "선택하세요" ? <SurveySelect /> : null}
                  {selectedNum === "객관식" 
                    ? <SurveyNum 

                      /> 
                    : null}
                  {selectedNum === "주관식" 
                    ? <SurveyShortAns 
                        AddSurveyQuest={AddSurveyQuest} 
                        surveyId={surveys[surveys.length-1].id}
                        /> 
                    : null}
                </SurveyAddLabel>
              </SurveyAddInputBox>
              <hr />

              <Button onClick={()=>{console.log('gg')}}>등록</Button>
              {/* <Button onClick={()=>{QuestionType(); AddSurveyQuest();}}>등록</Button> */}
            </SurveyAddDiv>
          </SurveyAddMain>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SurveyAdd;
