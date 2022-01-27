import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Btn,
  GotoLiveBtn,
  NotLiveBtn,
  SocialBtn,
} from "./BannerButton/BannerButton";
import { BannerSubTitle, BannerTitle } from "./BannerCaption/styles";
import { BannerCover, BannerImg, BannerWrapper } from "./styles";

export const ProjectBanner = () => {
  const params = useParams();
  const [onAir, setOnAir] = useState(false);
  const api = {
    title: "뭐시기가 고른 최고의 신예 파티용 샴페인",
    imgSrc:
      "http://www.andreclouet.com/wp-content/uploads/2019/03/AC-GR_1920x1080.jpg",
    subtitle: "Jola Mashisseú 2018",
    to: "2022/02/14",
    daysLeft: 34,
    progress: 1083,
    totalContribution: 72023456,
  };
  return (
    <BannerWrapper>
      <BannerImg src={api.imgSrc} width="100%" />
      <BannerCover>
        <BannerTitle>{api.title}</BannerTitle>
        <BannerSubTitle>{api.subtitle}</BannerSubTitle>
        <SocialBtn bottom="10px" right="350px" />
        {!onAir ? (
          <NotLiveBtn bottom="15px" right="190px">
            커밍 쑨
          </NotLiveBtn>
        ) : (
          <GotoLiveBtn bottom="15px" right="190px">
            라이브 진행중
          </GotoLiveBtn>
        )}
        <Btn bottom="15px" right="30px">
          펀딩하기
        </Btn>
      </BannerCover>
    </BannerWrapper>
  );
};
