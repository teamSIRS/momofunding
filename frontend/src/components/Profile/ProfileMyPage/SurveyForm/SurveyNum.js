import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  numQuestionSelector,
  numQuestionState,
  numQuestionTitleState,
} from "../atoms";

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

  const [numQuestionTitle, numQuestions] = useRecoilValue(numQuestionSelector);

  return (
    <div>
      <SurveyNumLabel>[ 객관식 질문 등록 ]</SurveyNumLabel>
      <form onSubmit={handleSubmit(onQuestionValid)}>
        <SurveyNumInput>
          <input
            {...register("questionTitle", {
              required: "Please write a questionTitle",
            })}
            placeholder="객관식 질문을 입력하세요."
          />

          <input
            {...register("question", {
              required: "Please write a question",
            })}
            placeholder="객관식 보기를 입력하세요."
          />
        </SurveyNumInput>
        <button>질문 등록</button>
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
export default SurveyNum;
