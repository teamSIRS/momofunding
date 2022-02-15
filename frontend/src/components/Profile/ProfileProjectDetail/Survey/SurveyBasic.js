import React from "react";
import {
  Body,
  Container,
  SurveyTitle,
  SurveyResult,
  EditIcon,
} from "../Survey/Survey.styled";

function SurveyBasic({ survey }) {
  return (
    <Body onClick={()=>{console.log('서베이id', survey.id)}}>
      <Container>
        <SurveyTitle>{survey.title}</SurveyTitle>
        <SurveyResult>결과 확인</SurveyResult>
      </Container>
      <EditIcon />
    </Body>
  );
}

export default SurveyBasic;
