import styled from "styled-components";
import { MomoColor, MomoWeakColor } from "../../../../shared/global";
import {
  TextArea,
  TextAreaWrapper,
} from "../../../ProjectDetail/ProjectContent/ProjectCommunity/PjCommunityQnA/PjCommunityInput/styles";
import {
  ChatBody,
  ChatFooter,
  ChatHeader,
  ChatTop,
  ChatWrapper,
  MessageBox,
} from "../Chat/styles";

export const SurveyWrapper = styled(ChatWrapper)``;

export const SurveyHeader = styled(ChatHeader)``;

export const SurveyMessageBox = styled(MessageBox)`
  width: 100%;
  max-width: 97%;
  color: ${MomoColor};

  &.submitDone {
    background: var(--successGradient);
  }

  &.submitUnDone {
    background: ${MomoWeakColor};
  }
`;

export const SurveyCreatorMsgBox = styled(SurveyMessageBox)`
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 0px;
  background: var(--primary);
  font-weight: 600;
  color: ${MomoWeakColor};
  display: flex;
`;

export const SurveyBody = styled(ChatBody)`
  &.done {
    font-size: 20px;
    justify-content: center;
    padding: 15px 15px;
    color: ${MomoColor};
  }
`;

export const ThankYouBox = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

export const SurveyFooter = styled(ChatFooter)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SurveyDescription = styled.div`
  background: var(--transparentLightGradient);
  border-radius: 12px;
  font-size: 16px;
  padding: 12px 18px;
  margin: 5px 0px;
`;

export const SurveyTitle = styled(ChatTop)`
  width: 100%;
  font-size: 18px;
  text-overflow: clip;
`;

export const SurveyChoiceLabel = styled.label`
  border-radius: 12px;
  margin: 3px 0px;
  cursor: pointer;
  display: flex;
  padding: 6px 10px;
  align-items: center;
  justify-content: start;
  background: rgba(255, 255, 255, 30%);
  transition: 0.2s ease-in-out;

  :hover {
    background: transparent;
  }

  &:before {
    content: "";
    height: 21px;
    width: 21px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 50%);
    margin-left: 6px;
    margin-right: 18px;
  }

  &.checked {
    color: ${MomoWeakColor};
    background: var(--successGradientStrong);
    &:before {
      content: "";
      height: 21px;
      width: 21px;
      border-radius: 50%;
      border: 4px solid;
      margin-left: 6px;
      margin-right: 18px;
      background: transparent;
    }
  }

  input {
    display: none;
  }
  & :checked,
  input:checked {
    background: red;
  }
`;

export const SurveyChoiceInput = styled.input`
  display: none;
`;

export const SurveyFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  padding: 6px 12px;
`;

export const SurveyTextWrapper = styled(TextAreaWrapper)`
  background: rgba(255, 255, 255, 30%);
  border-radius: 6px;
  padding: 5px 12px;
`;

export const SurveyText = styled(TextArea)`
  color: var(--primary);
`;

export const SurveySubmitBtn = styled.button`
  font-size: 16px;
  width: 55%;
  height: 35px;
  box-shadow: var(--secondaryBoxShadow);

  &.success {
    background: var(-successGradient);
  }

  &.fail {
    background: tomato;
  }
`;
