import { ChangeEventHandler, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { surveySubmitStates } from "..";
import { userIdState } from "../../../../../atoms";
import {
  SurveyChoiceInput,
  SurveyChoiceLabel,
  SurveyFormWrapper,
} from "../styles";

type SurveyChoiceProps = {
  surveyQuestionId: number;
  q_idx: number;
  choose?: { id: number; content: string }[];
};

const defaultChoice = -1;

const SurveyChoice = ({
  surveyQuestionId,
  q_idx,
  choose,
}: SurveyChoiceProps) => {
  const [check, setCheck] = useState(defaultChoice);
  const [states, setStates] = useRecoilState(surveySubmitStates);
  const [userId, _] = useRecoilState(userIdState);

  const isChecked = (target: number): boolean => target === check;
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCheck(Number(event.currentTarget.value));
  };
  const onUpdate = () => {
    const data = {
      surveyQuestionId: surveyQuestionId,
      userId: userId,
      questionSelectId: check + 1,
      content: "",
    };
    let updated = [...states];
    if (check == defaultChoice) {
      return;
    }
    updated[q_idx] = data;
    setStates(updated);
  };

  useEffect(onUpdate, [check]);
  return (
    <SurveyFormWrapper>
      {choose?.map((choice, idx) => (
        <SurveyChoiceLabel
          htmlFor={q_idx + "-" + idx}
          className={isChecked(idx) ? "checked" : "unchecked"}
        >
          {choice.content}
          <SurveyChoiceInput
            type="radio"
            id={q_idx + "-" + idx}
            value={idx}
            checked={isChecked(idx)}
            onChange={onChange}
          />
        </SurveyChoiceLabel>
      ))}
    </SurveyFormWrapper>
  );
};
export default SurveyChoice;
