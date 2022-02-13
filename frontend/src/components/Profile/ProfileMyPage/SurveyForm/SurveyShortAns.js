import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
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
  margin: 20px 0px;
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

function SurveyShortAns() {
  const { register, handleSubmit, setValue, setContentValue } = useForm();
  const setShortAnsQuestion = useSetRecoilState(shortAnsQuestionTitleState);
  const shortAnsQuestion = useRecoilValue(shortAnsQuestionSelector);
  const onQuestionValid = ({ shortAnsQuestion }) => {
    setShortAnsQuestion(shortAnsQuestion);
    setValue("shortAnsQuestion", "");
  };

  const {id} = useParams();
  const[title, setTitle] = useState();
  const[endDate, setEndDate] = useState();

  async function saveSurvey(){
    await axios({
      url: `${baseUrl}/surveys`,
      method: "post",
      data:{
        projectId: id,
        title: title,
        content: "",
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

  return (
    <div>
      <SurveyShortAnsLabel>[ 설문조사 종료 일시 ]</SurveyShortAnsLabel>
      <form>
        <SurveyShortAnsInput>
          <input
            type="datetime-local"
            required
            onChange={(e) =>{setEndDate(e.target.value);}}
          />
        </SurveyShortAnsInput>
      </form>
      <SurveyShortAnsLabel>[ 주관식 질문 등록 ]</SurveyShortAnsLabel>
      <form onSubmit={handleSubmit(onQuestionValid)}>
        <SurveyShortAnsInput>
          <input
            {...register("shortAnsQuestion", {
              required: "Please write a shortAnsQuestion",
            })}
            placeholder="주관식 질문을 입력하세요."
            onChange={(e) =>{
              setTitle(e.target.value)
            }}
          />
        </SurveyShortAnsInput>
        <button onClick={()=>{saveSurvey();setTitle("");}}>질문 등록</button>
      </form>
      <SurveyShortAnsLabel>[ 등록한 주관식 질문 ]</SurveyShortAnsLabel>
      {/* <SurveyShortAnsP>Q : {shortAnsQuestion}</SurveyShortAnsP> */}
      <SurveyShortAnsP>Q : {title}</SurveyShortAnsP>
    </div>
  );
}

export default React.memo(SurveyShortAns);