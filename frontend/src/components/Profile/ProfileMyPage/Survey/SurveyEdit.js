import React, { useState } from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { removeCircleOutline } from 'ionicons/icons';
import { Container, SurveyTitle, SurveyResult} from '../Survey/SurveyBasic';

const Body = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`;

const EditIcon = styled(IonIcon)`
    font-size: 30px;
    padding-left: 10px;
    color: #7c7c7c;
    float: right;
`;

function SurveyEdit({survey, onRemove}){

    return(
        <Body>
            <Container>
                <SurveyTitle>{survey.title}</SurveyTitle>
                <SurveyResult>수정</SurveyResult>
            </Container>
            <EditIcon icon={removeCircleOutline} onClick={() => onRemove(survey.id)}></EditIcon>
        </Body>
    );

}
export default SurveyEdit;