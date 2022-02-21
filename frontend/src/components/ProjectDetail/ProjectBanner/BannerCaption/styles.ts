import styled from "styled-components";
import { MomoColor } from "../../../../shared/global";

export const BannerCoverBox = styled.div`
  position: relative;
  margin-right: 200px;
`;

export const BannerTitle = styled.h2`
  color: dark;
  position: absolute;
  font-weight: 900;
  top: 30px;
  right: 20px;
`;

export const SubTitle = styled(BannerTitle)`
  font-weight: normal;
  font-size: 20px;
  top: 80px;
`;

export const BannerSubTitle = styled.h3`
  color: ${MomoColor};
  position: absolute;
  font-weight: 900;
  top: 70px;
  right: 20px;
`;
