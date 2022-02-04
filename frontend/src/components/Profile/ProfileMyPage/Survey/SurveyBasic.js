import React from 'react';
import { Body, Container, SurveyTitle, SurveyResult, EditIcon } from '../Survey/Survey.styled';
<<<<<<< HEAD

=======
>>>>>>> cd7619948fe13814a95265df294cae509166750f

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
}


export default SurveyBasic;