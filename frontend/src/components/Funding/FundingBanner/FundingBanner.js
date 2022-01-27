import styled from "styled-components";
import { BannerCover, BannerImg, BannerWrapper } from "./styles";

const FundingBannerContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const FundingBannerContentImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-right: 100px;
  align-self: center;
`;
const FundingBannerContent = styled.div``;

const FundingBannerContentTitle = styled.span`
  display: block;
  color: white;
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 20px;
`;

const FundingBannerContentSubTitle = styled(FundingBannerContentTitle)`
  color: #6667ab;
  font-size: 30px;
`;

const FundingBannerContentLabel = styled(FundingBannerContentTitle)`
  color: #6667ab;
  font-size: 20px;
`;

const FundingBannerContentPrice = styled(FundingBannerContentTitle)`
  color: black;
  font-size: 30px;
`;

export const FundingBanner = () => {
  const api = {
    title: "뭐시기가 고른 최고의 신예 파티용 샴페인",
    subtitle: "Jola Mashisseú 2018",
    label: "Gold 라벨",
    price: "244,000원",
  };
  return (
    <BannerWrapper>
      <BannerImg src="/photo/funding.jpg" width="100%" />
      <BannerCover>
        <FundingBannerContentBox>
          <FundingBannerContentImg src="/photo/funding_small.jpg" />
          <FundingBannerContent>
            <FundingBannerContentTitle>{api.title}</FundingBannerContentTitle>
            <FundingBannerContentSubTitle>
              {api.subtitle}
            </FundingBannerContentSubTitle>
            <FundingBannerContentLabel>{api.label}</FundingBannerContentLabel>
            <FundingBannerContentPrice>{api.price}</FundingBannerContentPrice>
          </FundingBannerContent>
        </FundingBannerContentBox>
      </BannerCover>
    </BannerWrapper>
  );
};
