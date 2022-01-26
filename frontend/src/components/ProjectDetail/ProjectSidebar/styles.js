import styled from 'styled-components';
import { MomoColor } from '../../../shared/global';

export const Text = styled.div`
    margin-left: 60px;
`;

export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 347px;
    height: 307px;
    border-radius: 20px;
    box-shadow: 4px 4px 20px 0px ${MomoColor};
    margin: 20px;
`;

export const CardTitle = styled.p`
    color: ${MomoColor};
    font-size: 18px;
    font-weight: bold;
`;
