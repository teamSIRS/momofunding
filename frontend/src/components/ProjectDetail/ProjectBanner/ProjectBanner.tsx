import { prototype } from "events";
import React,{ useState } from "react";
import { useParams } from "react-router-dom";
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

interface Props {
  project: any,
}

export const ProjectBanner:React.FC<Props> = ({...props}) => {
  const params = useParams();
  const [onAir, setOnAir] = useState(false);
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
          <GotoLiveBtn bottom="35px" right="190px">
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
