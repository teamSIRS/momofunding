import React from 'react';
import styled from 'styled-components';
import { MomoColor, MomoStrongColor } from '../../../../shared/global';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 8px 0px;
    padding: 13px 15px 0 15px;
    border-radius: 8px;
    box-shadow: 2px 2px 7px 0 silver;
`;

export const SurveyTitle = styled.p`
`;

export const SurveyResult = styled.p`
    color: ${MomoColor};
    :hover{
        color: ${MomoStrongColor};
    }
`;

function SurveyBasic({survey}){
    return(
        <Container>
            <SurveyTitle>{survey.title}</SurveyTitle>
            <SurveyResult>결과 확인</SurveyResult>
        </Container>
    );
}


export default SurveyBasic;