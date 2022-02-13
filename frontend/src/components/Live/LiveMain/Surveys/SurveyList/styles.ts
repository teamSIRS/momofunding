import styled from "styled-components";

export const SurveyListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const SurveyItemWrapper = styled.div`
  background: rgba(255, 255, 255, 45%);
  box-shadow: var(--secondaryBoxShadow);
  width: 100%;
  padding: 20px 20px;
  margin-bottom: 15px;
  border-radius: 12px;
  font-size: 18px;
  transition: ease-in-out;
  :hover {
    background: var(--successGradientStrong);
    color: whitesmoke;
  }
`;
