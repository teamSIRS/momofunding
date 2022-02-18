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

export const FundingBanner = (props) => {
  const api = {
    title: props.project.projectName,
    subtitle: props.project.summary,
    label: props.reward.name,
    price: props.amount+"원",
  };
  return (
    <BannerWrapper>
      <BannerImg src={props.project.mainImageUrl} width="100%" />
      <BannerCover>
        <FundingBannerContentBox>
          <FundingBannerContentImg src={props.project.subImageUrl} />
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
