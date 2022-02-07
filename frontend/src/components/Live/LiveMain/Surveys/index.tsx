import { useState } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { ChatProps } from "../Chat";
import { ChatTop } from "../Chat/styles";
import {
  SurveyBody,
  SurveyCreatorMsgBox,
  SurveyDescription,
  SurveyFooter,
  SurveyHeader,
  SurveyMessageBox,
  SurveyTitle,
  SurveyWrapper,
  SurveySubmitBtn,
} from "./styles";
import SurveyChoice from "./SurveyChoice";
import SurveyNarrative from "./SurveyNarrative";

const api = {
  title: "Apple iPhone 3GS를 어떻게 생각하시나요?",
  content:
    "해당 설문조사는 아이폰 3GS 설명회에 대한 설문입니다.\
    모든 설문 결과는 익명이 보장되며, 여려분의 소중한 의견은\
    적극적으로 반영하도록 하겠습니다.",
  questions: [
    {
      title: "iPhone이 출시된다면?",
      type: 0,
      choose: ["구매의사가 있다", "구매의사가 없다"],
    },
    {
      title: "현재 사용하시는 스마트폰의 기종이 무엇인가요?",
      type: 0,
      choose: ["아이폰", "갤럭시", "기타", "모모"],
    },
    {
      title: "여러분의 의견을 자유롭게 제출해주세요",
      type: 1,
    },
  ],
};

const submits = api.questions.map((question) => {
  if (question.type === 1) return true;
  return false;
});

export const submitStates = atom({
  key: "submitStates",
  default: submits,
});

const submitConfirm = selector({
  key: "submitConfirm",
  get: ({ get }) => {
    console.log("done?");
    const states = get(submitStates);
    let allConfirmed = true;
    states.forEach((isSubmitted) => {
      if (!isSubmitted) allConfirmed = false;
    });
    return allConfirmed;
  },
});

const Survey = ({ show }: ChatProps) => {
  const [states, setStates] = useRecoilState(submitStates);
  const submitAllDone = useRecoilValue(submitConfirm);
  return (
    <form>
      <SurveyWrapper className={show ? "hide" : ""}>
        <SurveyHeader>
          <ChatTop>설문조사</ChatTop>
          <SurveyTitle>{api.title}</SurveyTitle>
          <SurveyDescription>{api.content}</SurveyDescription>
        </SurveyHeader>
        <SurveyBody>
          {api.questions.map((question, idx) => (
            <div key={idx}>
              <SurveyCreatorMsgBox>
                Q{idx + 1}. {question.title}
              </SurveyCreatorMsgBox>
              <SurveyMessageBox
                className={states[idx] ? "submitDone" : "submitUnDone"}
              >
                {question.type === 0 ? (
                  <SurveyChoice q_idx={idx} choose={question.choose} />
                ) : (
                  <SurveyNarrative />
                )}
              </SurveyMessageBox>
            </div>
          ))}
        </SurveyBody>
        <SurveyFooter>
          <SurveySubmitBtn
            disabled={!submitAllDone}
            className={submitAllDone ? "success" : "fail"}
          >
            {submitAllDone ? "제출하기" : "답변을 입력해주세요"}
          </SurveySubmitBtn>
        </SurveyFooter>
      </SurveyWrapper>
    </form>
  );
};

export default Survey;
