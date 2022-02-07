import styled from 'styled-components';
import { MomoColor } from '../../../shared/global';
import { Link } from 'react-router-dom';

export const Body = styled.div`
    display: flex;
    padding: 50px;
`;

export const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 25%;
    padding: 20px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px 0px ${MomoColor};
`;

export const ProjectPic = styled.div`
    width: 95%;
    height: 250px;
    margin: 10px;
    background-image: url('https://image.hmall.com/static/1/1/80/25/2125801100_0.jpg?RS=600x600&AR=0');
    background-position: center;
    background-size: cover;
`;

export const TitleBox = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    border-top: 2px solid black;
    padding-top: 5px;
`;

export const ProjectTitle = styled.p`
    font-weight: bold;
`;

export const CreatorName = styled.p``;

export const ProjectContent = styled.p`
    width: 95%;
`;

export const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
    margin: 20px 0;
`;

export const ManageBtn = styled.div`
    background-color: ${MomoColor};
    color: white;
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    text-align:center;
    font-size: 20px;
    border-radius: 10px;
`;

export const LiveBtn = styled(ManageBtn)`
    background-color: red;
`;

export const MyLink = styled(Link)`
    text-decoration: none;
`;
//////////////////////

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    width: 75%;
`;

export const LiveBox = styled.div`
    padding: 15px;
    margin-bottom: 30px;
`;

export const Title = styled.p`
    font-size: 13pt;
    font-weight: bold;
`;

export const BottomBox = styled.div`
    display: flex;
`;

export const SurveyBox = styled(LiveBox)`
    width: 50%;
`;

export const SurveyTextBox = styled.div`
    display: flex;
    margin: 5px 0;
`;

export const SurveyAdd = styled.span`
    padding-left: 10px;
`;

export const SurveyEditText = styled(SurveyAdd)`
    color: ${MomoColor};
`;


export const SponsorBox = styled(LiveBox)`
    width: 50%;
`;

export const SponsorList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;