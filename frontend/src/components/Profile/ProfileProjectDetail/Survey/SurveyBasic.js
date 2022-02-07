<<<<<<< HEAD:frontend/src/components/Profile/ProfileMyPage/Survey/SurveyBasic.js
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
    <Body>
      <Container>
        <SurveyTitle>{survey.title}</SurveyTitle>
        <SurveyResult>결과 확인</SurveyResult>
      </Container>
      <EditIcon />
    </Body>
  );
=======
import React from 'react';
import { Body, Container, SurveyTitle, SurveyResult, EditIcon } from '../Survey/Survey.styled';

function SurveyBasic({survey}){
    return(
        <Body>
            <Container>
                <SurveyTitle>{survey.title}</SurveyTitle>
                <SurveyResult>결과 확인</SurveyResult>
            </Container>
            <EditIcon/>
        </Body>
    );
>>>>>>> 5a3354c0ca600109ac4d020ef404ab98474aeada:frontend/src/components/Profile/ProfileProjectDetail/Survey/SurveyBasic.js
}

export default SurveyBasic;
