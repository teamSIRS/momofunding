import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import { shortAnsQuestionTitleState } from "../atoms";
import swal from "sweetalert";

const SurveyShortAnsLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 20px 0px;
`;

const SurveyShortAnsInput = styled.div`
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



function SurveyShortAns({ surveyId, AddSurveyQuest }) {
  const { handleSubmit, setValue } = useForm();
  const setShortAnsQuestion = useSetRecoilState(shortAnsQuestionTitleState);
  const onQuestionValid = ({ shortAnsQuestion }) => {
    setShortAnsQuestion(shortAnsQuestion);
    setValue("shortAnsQuestion", "");
  };
  const [id, setId] = useState(surveyId);
  const [title, setTitle] = useState();
  const [questionType, setQuestionType] = useState(2);
  
  const addSurveyQuest=()=>{
    if(title === "") return;
    AddSurveyQuest(id, questionType, title); 
    swal('질문이 등록되었습니다', {icon: 'success'});
  }
  
  const enterkey = () => {
    if (window.event.keyCode === 13) addSurveyQuest();
  };

  return (
    <div>
      <SurveyShortAnsLabel>[ 주관식 질문 등록 ]</SurveyShortAnsLabel>
      <form onSubmit={handleSubmit(onQuestionValid)}>
        <SurveyShortAnsInput>
          <input
            required
            placeholder="주관식 질문을 입력하고 질문 등록을 눌러주세요"
            onChange={(e) => {setTitle(e.target.value);}}
            onKeyUp={enterkey}
          />
        </SurveyShortAnsInput>
        <Button onClick={addSurveyQuest}>질문 등록</Button>
      </form>
    </div>
  );
}

export default React.memo(SurveyShortAns);