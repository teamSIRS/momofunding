import { ChangeEventHandler, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { surveySubmitStates } from "..";
import { userIdState } from "../../../../../atoms";
import {
  TextArea,
  TextAreaWrapper,
} from "../../../../ProjectDetail/ProjectContent/ProjectCommunity/PjCommunityQnA/PjCommunityInput/styles";
import { SurveyFormWrapper, SurveyText, SurveyTextWrapper } from "../styles";

type SurveyNarrativeProps = {
  surveyQuestionId: number;
  q_idx: number;
};

const SurveyNarrative = ({ surveyQuestionId, q_idx }: SurveyNarrativeProps) => {
  const [userId, _] = useRecoilState(userIdState);
  const [states, setStates] = useRecoilState(surveySubmitStates);
  const [answer, setAnswer] = useState("");
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setAnswer(event.currentTarget.value);
  };

  const onUpdate = () => {
    const data = {
      surveyQuestionId: surveyQuestionId,
      userId: userId,
      questionSelectId: 0,
      content: answer,
    };
    let updated = [...states];

    updated[q_idx] = data;
    setStates(updated);
  };

  useEffect(onUpdate, [answer]);

  return (
    <SurveyFormWrapper>
      <SurveyTextWrapper>
        <SurveyText
          onChange={onChange}
          value={answer}
          placeholder="(선택사항) 여러분의 소중한 의견을 전해주세요"
        ></SurveyText>
      </SurveyTextWrapper>
    </SurveyFormWrapper>
  );
};

export default SurveyNarrative;
