import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { shortAnsQuestionSelector, shortAnsQuestionTitleState } from "../atoms";
import axios from 'axios';
import {baseUrl} from '../../../../App';

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
  const { register, handleSubmit, setValue } = useForm();
  const setShortAnsQuestion = useSetRecoilState(shortAnsQuestionTitleState);
  const shortAnsQuestion = useRecoilValue(shortAnsQuestionSelector);
  const onQuestionValid = ({ shortAnsQuestion }) => {
    setShortAnsQuestion(shortAnsQuestion);
    setValue("shortAnsQuestion", "");
  };

  // const saveSurvey = async() =>{
  //   await axios({
  //     url:
  //   })
  // }

  return (
    <div>
      <SurveyShortAnsLabel>[ 주관식 질문 등록 ]</SurveyShortAnsLabel>
      <form onSubmit={handleSubmit(onQuestionValid)}>
        <SurveyShortAnsInput>
          <input
            {...register("shortAnsQuestion", {
              required: "Please write a shortAnsQuestion",
            })}
            placeholder="주관식 질문을 입력하세요."
          />
        </SurveyShortAnsInput>
        <button>질문 등록</button>
      </form>
      <SurveyShortAnsLabel>[ 등록한 주관식 질문 ]</SurveyShortAnsLabel>
      <SurveyShortAnsP>Q : {shortAnsQuestion}</SurveyShortAnsP>
    </div>
  );
}
export default SurveyShortAns;
