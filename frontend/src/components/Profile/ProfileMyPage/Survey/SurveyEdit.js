import React, { useState } from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { removeCircleOutline } from 'ionicons/icons';
import { Container, SurveyTitle, SurveyResult} from '../Survey/SurveyBasic';

const Body = styled.div`
    display: flex;
    align-items: center;
`;
const EditIcon = styled(IonIcon)`
    font-size: 30px;
    padding-left: 10px;
    color: #7c7c7c;
`;

function SurveyEdit(props){

    function removeSurvey(){
        console.log('삭제');

    }

    return(
        <Body>
            <Container>
                <SurveyTitle>{props.surveys.title}</SurveyTitle>
                <SurveyResult>수정</SurveyResult>
            </Container>
            <EditIcon icon={removeCircleOutline} onClick={removeSurvey}></EditIcon>
        </Body>
    );
}

export default SurveyEdit;