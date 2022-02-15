import { prototype } from "events";
import React,{ useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";


import {
  Btn,
  GotoLiveBtn,
  NotLiveBtn,
  SocialBtn,
} from "./BannerButton/BannerButton";
import { BannerSubTitle, BannerTitle, SubTitle } from "./BannerCaption/styles";
import BannerContribStatus from "./BannerContribStatus";
import { MomoProgress } from "./BannerProgress/styles";
import { BannerCover, BannerImg, BannerWrapper } from "./styles";
import { baseUrl } from "../../../App";

interface Props {
  project: any,
}

export const ProjectBanner: React.FC<Props> = ({ ...props }) => {
  const params = useParams();
  const [onAir, setOnAir] = useState(false);
  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState("");

  const getLiveState = async () => {
    await axios({
      url: "/projects/"+ props.project.id + "/is-play-live", 
      method: "get", 
      data: {},
      baseURL: baseUrl,	
    })	
      .then((response) => { 
        console.log(response.data.isPlayLive); 
        setOnAir(response.data.isPlayLive);
      })
      .catch((error) => { // .catch는 axios 요청 실패시 작업
        console.log(error); // error 메세지 확인
      });
  }
  
  const getSessionId = async () => {
    await axios({
      url: "/projects/live/session-id/"+ props.project.id, 
      method: "get", 
      data: {},
      baseURL: baseUrl,	
    })	
      .then((response) => { 
        console.log(response.data.sessionId); 
        setSessionId(response.data.sessionId);
      })
      .catch((error) => { // .catch는 axios 요청 실패시 작업
        console.log(error); // error 메세지 확인
      });
  }

  getLiveState();
  getSessionId();

  const route = () => {
    navigate("/lives/" + sessionId);
  }

  const contribRate =
    Math.round((props.project.currentAmount / props.project.fundingGoal) * 1000) / 10;

  return (
    <BannerWrapper>
      <BannerImg src={props.project.mainImageUrl} width="100%" />
      <BannerCover>
        {/* <Test> */}
        <BannerTitle>{props.project.summary}</BannerTitle>
        <SubTitle>{props.project.projectName}</SubTitle>
        <BannerSubTitle>{props.project.subtitle}</BannerSubTitle>
        <BannerContribStatus
          // from={api.from}
          to={props.project.expirationDate}
          total={props.project.currentAmount}
          goal={props.project.fundingGoal}
          contribRate={contribRate}
          ></BannerContribStatus>

        <SocialBtn bottom="31px" right="350px" />
        {!onAir ? (
          <NotLiveBtn bottom="35px" right="190px">
            커밍 쑨
          </NotLiveBtn>
        ) : (
          <GotoLiveBtn onClick={route} bottom="35px" right="190px">
              라이브 진행중
            </GotoLiveBtn>
        )}
        <Btn bottom="35px" right="30px">
          펀딩하기
        </Btn>
        {/* <MomoProgress width="100%" bottom="0px" animated now={contribRate} /> */}
      </BannerCover>
    </BannerWrapper>
  );
};
