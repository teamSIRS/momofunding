import styled from "styled-components";
import { MomoColor } from "../../../shared/global";
import { Link } from "react-router-dom";

export const Body = styled.div`
  display: flex;
  padding: 50px;
  width: 85%;
  margin: auto;
  min-height: 900px;
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 2px 2px 10px 0px ${MomoColor};
`;

export const ProjectPic = styled.img`
  width: 95%;
  height: 250px;
  margin: 10px;
  object-position: center;
  object-fit: cover;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: space-between;
  border-top: 2px solid black;
  padding-top: 5px;
`;

export const ProjectTitle = styled.p`
  font-weight: bold;
  padding-top: 5px;
  margin: 3px;
`;

export const CreatorName = styled.p`
  margin: 3px;
`;

export const ProjectContent = styled.p`
  margin: 3px 3px 5px 3px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

export const ManageBtn = styled.div`
  background-color: ${MomoColor};
  color: white;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
  border-radius: 10px;
`;

export const LiveBtn = styled(ManageBtn)`
  background-color: red;
  &:hover {
    color: #c4c4c4;
`;

export const ToNewLiveLink = styled(Link)`
  width: 100%;
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
  width: 40%;
`;

export const SurveyTextBox = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const SurveyEditText = styled.span`
  padding-left: 10px;
  color: ${MomoColor};
`;

export const SponsorBox = styled(LiveBox)`
  width: 60%;
`;

export const SponsorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
