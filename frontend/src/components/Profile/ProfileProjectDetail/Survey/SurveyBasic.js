import React from "react";
import SurveyResult from "../../ProfileMyPage/SurveyResult";
import {
  Body,
  Container,
  SurveyTitle,
  EditIcon,
} from "../Survey/Survey.styled";

function SurveyBasic({ survey }) {
  return (
    <Body
      onClick={() => {
        console.log("서베이id", survey.id);
      }}
    >
      <Container>
        <SurveyTitle>{survey.title}</SurveyTitle>

        <SurveyResult surveyId={survey.id}></SurveyResult>
      </Container>
      <EditIcon />
    </Body>
  );
}

export default SurveyBasic;
