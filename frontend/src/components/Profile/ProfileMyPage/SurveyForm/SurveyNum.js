import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  numQuestionSelector,
  numQuestionState,
  numQuestionTitleState,
} from "../atoms";
import setAuthorizationToken from '../../../../atoms';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../../../App';
import swal from "sweetalert";
import styled from "styled-components";


const SurveyNumLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px;
`;

const SurveyNumInput = styled.div`
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

function SurveyNum() {
  const { register, handleSubmit, setValue } = useForm();
  const setQuestionTitle = useSetRecoilState(numQuestionTitleState);
  const setNumQuestion = useSetRecoilState(numQuestionState);
  
  const onQuestionValid = ({ questionTitle, question }) => {
    setQuestionTitle(questionTitle);
    
    setNumQuestion((oldQuestion) => [
      { text: question, id: Date.now() },
      ...oldQuestion,
    ]);
    
    setValue("question", "");
  };
  
  const { id } = useParams();
  const[title, setTitle] = useState("");
  const[content, setContent] = useState("");
  const[endDate, setEndDate] = useState();
  const [numQuestionTitle, numQuestions] = useRecoilValue(numQuestionSelector);
  async function saveSurvey(){
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
        console.log('ok');
      })
      .catch((e) => {
        console.log(e);
        swal('양식을 정확히 입력해주세요', {icon:"warning"});
      })
    }
    
    const[questions, setQuestions] = useState();


  return (
    <div>
      <SurveyNumLabel>[ 설문조사 종료 일시 ]</SurveyNumLabel>
      <form>
        <SurveyNumInput>
          <input
            type="datetime-local"
            required
            onChange={(e) =>{setEndDate(e.target.value);}}
          />
        </SurveyNumInput>
      </form>
      <SurveyNumLabel>[ 객관식 질문 등록 ]</SurveyNumLabel>
      <form onSubmit={handleSubmit(onQuestionValid)}>
        <SurveyNumInput>
          <input
            {...register("questionTitle", {
              required: "Please write a questionTitle",
            })}
            placeholder="객관식 질문을 입력하세요."
            onChange={(e) =>{
              setTitle(e.target.value);
            }}
          />

          <input
            {...register("question", {
              required: "Please write a question",
            })}
            placeholder="객관식 보기를 입력하세요."
            onChange={(e) =>{
              setContent(e.target.value);
            }}
          />
        </SurveyNumInput>
        <button onClick={()=>{saveSurvey();setContent("");}}>질문 등록</button>
        <button onClick={()=>{saveSurvey();setContent("");}}>보기 등록</button>
      </form>
      <SurveyNumLabel>[ 등록한 객관식 질문 ]</SurveyNumLabel>
      <br />Q : {numQuestionTitle}
      <ol>
        {numQuestions.map((numQuestion, index) => (
          <li key={index}>{numQuestion.text}</li>
        ))}
      </ol>
    </div>
  );
}
export default React.memo(SurveyNum);
