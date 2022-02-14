import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import { shortAnsQuestionSelector, shortAnsQuestionTitleState } from "../atoms";
import axios from 'axios';
import { baseUrl } from '../../../../App';
import setAuthorizationToken from '../../../../atoms';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const SurveyShortAnsP = styled.p``;

function SurveyShortAns({ surveyId, AddSurveyQuest }) {
  const { register, handleSubmit, setValue, setContentValue } = useForm();
  const setShortAnsQuestion = useSetRecoilState(shortAnsQuestionTitleState);
  const shortAnsQuestion = useRecoilValue(shortAnsQuestionSelector);
  const onQuestionValid = ({ shortAnsQuestion }) => {
    setShortAnsQuestion(shortAnsQuestion);
    setValue("shortAnsQuestion", "");
  };

  const [id, setId] = useState(surveyId);
  const [title, setTitle] = useState();
  const [questionType, setQuestionType] = useState(2);

  return (
    <div>
      <SurveyShortAnsLabel>[ 주관식 질문 등록 ]</SurveyShortAnsLabel>
      <form onSubmit={handleSubmit(onQuestionValid)}>
        <SurveyShortAnsInput>
          {/* <input
            {...register("shortAnsQuestion", {
              required: "Please write a shortAnsQuestion",
            })}
            placeholder="주관식 질문을 입력하세요."
            onChange={(e) =>{
              setTitle(e.target.value)
            }}
          /> */}
          <input
            required
            placeholder="주관식 질문을 입력하고 질문 등록을 눌러주세요"
            onChange={(e) => {setTitle(e.target.value);}}
          />
        </SurveyShortAnsInput>
        <Button onClick={() =>{AddSurveyQuest(id, questionType, title); 
            swal('질문이 등록되었습니다', {icon: 'success'});
          }}>질문 등록</Button>
      </form>
      {/* <SurveyShortAnsLabel>[ 등록한 주관식 질문 ]</SurveyShortAnsLabel> */}
      {/* <SurveyShortAnsP>Q : {shortAnsQuestion}</SurveyShortAnsP> */}
      {/* <SurveyShortAnsP>Q : {title}</SurveyShortAnsP> */}
    </div>
  );
}

export default React.memo(SurveyShortAns);