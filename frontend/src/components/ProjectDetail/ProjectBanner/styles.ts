import styled from "styled-components";
import { BannerBox } from "../../Home/HomeBanners/HomeBanner/styles";

export const BannerImg = styled.img`
  /* object-fit: cover;
  object-position: center; */
  position: absolute;
  width: 100%;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
`;

export const BannerWrapper = styled(BannerBox)`
  position: relative;
  overflow: hidden;
  min-width: 993px;
  width: 100%;
  height: 450px;
`;

export const BannerCover = styled(BannerBox)`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 65%)
  );
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const BannerContent = styled.div`
  border: 1px solid red;
  margin-right: 20px;
`;
