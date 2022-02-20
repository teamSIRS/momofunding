import { prototype } from "events";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Btn,
  GotoLiveBtn,
  NotLiveBtn,
  SocialBtn,
} from "./BannerButton/BannerButton";
import {
  BannerCoverBox,
  BannerSubTitle,
  BannerTitle,
  SubTitle,
} from "./BannerCaption/styles";
import BannerContribStatus from "./BannerContribStatus";
import { MomoProgress } from "./BannerProgress/styles";
import { BannerCover, BannerImg, BannerWrapper } from "./styles";
import { baseUrl } from "../../../App";
import styled from "styled-components";

interface Props {
  project: any;
  sessionId: any;
  onAir: any;
}

export const ProjectBanner: React.FC<Props> = ({ ...props }) => {
  const params = useParams();
  // const [onAir, setOnAir] = useState(false);
  const navigate = useNavigate();
  // const [sessionId, setSessionId] = useState("");

  const route = () => {
    navigate("/lives/" + props.sessionId + "/" + props.project.id);
  };

  const GoToReward = () => {
    window.scrollTo(0, 1200);
  };

  const contribRate =
    Math.round(
      (props.project.currentAmount / props.project.fundingGoal) * 1000
    ) / 10;

  return (
    <BannerWrapper>
      <BannerImg src={props.project.mainImageUrl} width="100%" />
      <BannerCover>
        <BannerCoverBox>
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
        </BannerCoverBox>
        {/* <SocialBtn bottom="31px" right="350px" /> */}
        {!props.onAir ? (
          <NotLiveBtn bottom="35px" right="390px">
            라이브 커밍 쑨
          </NotLiveBtn>
        ) : (
          <GotoLiveBtn onClick={route} bottom="35px" right="390px">
            라이브 진행 중
          </GotoLiveBtn>
        )}
        <Btn onClick={GoToReward} bottom="35px" right="220px">
          펀딩하기
        </Btn>
        {/* <MomoProgress width="100%" bottom="0px" animated now={contribRate} /> */}
      </BannerCover>
    </BannerWrapper>
  );
};
