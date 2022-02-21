import styled from "styled-components";
import {
  MomoColor,
  MomoStrongColor,
  MomoWeakColor,
} from "../../../../../shared/global";

export const SurveyListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const SurveyItemWrapper = styled.div`
  background: ${MomoWeakColor};
  box-shadow: var(--secondaryBoxShadow);
  width: 100%;
  padding: 20px 20px;
  margin-bottom: 15px;
  border-radius: 12px;
  font-size: 18px;
  transition: ease-in-out;
  :hover {
    background: ${MomoColor};
    color: whitesmoke;
  }
  &.sent {
    background: var(--successStrong);
    color: white;
  }
`;

export const SurveysNotExists = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 600;
`;
