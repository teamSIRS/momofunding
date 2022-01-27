import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Btn,
  GotoLiveBtn,
  NotLiveBtn,
  SocialBtn,
} from "./BannerButton/BannerButton";
import { BannerSubTitle, BannerTitle } from "./BannerCaption/styles";
import BannerContribStatus from "./BannerContribStatus";
import { MomoProgress } from "./BannerProgress/styles";
import { BannerCover, BannerImg, BannerWrapper } from "./styles";

export const ProjectBanner = () => {
  const params = useParams();
  const [onAir, setOnAir] = useState(false);
  const api = {
    title: "뭐시기가 고른 최고의 신예 파티용 샴페인",
    imgSrc:
      "http://www.andreclouet.com/wp-content/uploads/2019/03/AC-GR_1920x1080.jpg",
    subtitle: "Jola Mashisseú 2018",
    from: "2021/12/25",
    to: "2022/02/18",
    progress: 1083,
    totalContribution: 72023456,
    goalContribution: 7000000,
  };
  const contribRate =
    Math.round((api.totalContribution / api.goalContribution) * 1000) / 10;

  return (
    <BannerWrapper>
      <BannerImg src={api.imgSrc} width="100%" />
      <BannerCover>
        <BannerTitle>{api.title}</BannerTitle>
        <BannerSubTitle>{api.subtitle}</BannerSubTitle>
        <BannerContribStatus
          from={api.from}
          to={api.to}
          total={api.totalContribution}
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
        <MomoProgress width="100%" bottom="0px" animated now={contribRate} />
      </BannerCover>
    </BannerWrapper>
  );
};
