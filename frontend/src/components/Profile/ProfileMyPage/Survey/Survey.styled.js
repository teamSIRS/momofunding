import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { MomoColor, MomoStrongColor } from '../../../../shared/global';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 5px 0px;
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

export const Body = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`;

export const EditIcon = styled(IonIcon)`
    font-size: 30px;
    padding-left: 10px;
    color: #7c7c7c;
    float: right;
`;

