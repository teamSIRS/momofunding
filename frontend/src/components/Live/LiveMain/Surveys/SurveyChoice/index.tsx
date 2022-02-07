import { ChangeEventHandler, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { submitStates } from "..";
import {
  SurveyChoiceInput,
  SurveyChoiceLabel,
  SurveyFormWrapper,
} from "../styles";

type SurveyChoiceProps = {
  q_idx: number;
  choose?: string[];
};

const defaultChoice = -1;

const SurveyChoice = ({ q_idx, choose }: SurveyChoiceProps) => {
  const [check, setCheck] = useState(defaultChoice);
  const [states, setStates] = useRecoilState(submitStates);

  const isChecked = (target: number): boolean => target === check;
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCheck(Number(event.currentTarget.value));
  };
  const onUpdate = () => {
    let updated = [...states];
    if (check == defaultChoice) {
      return;
    }
    updated[q_idx] = true;
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
          {choice}
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
