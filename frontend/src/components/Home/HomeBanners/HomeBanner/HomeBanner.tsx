import { Carousel } from "react-bootstrap";
import { ImageForBg } from "../../../Live/LiveMain/Chat/styles";
import { BadgeContainer } from "../../HomeFundings/HomeFundingCard/styles";
import { BannerBox, StyledImg } from "./styles";

export type HomeBannerProps = {
  index: number;
  imgSrc: string;
  title: string;
  slogan: string;
};

export const HomeBanner = ({
  index,
  imgSrc,
  title,
  slogan,
}: HomeBannerProps) => {
  return (
    <BannerBox>
      <StyledImg src={imgSrc} alt={index.toString()} />
      {/* <BadgeContainer bottom="18px" left="30px">
        <LiveBadge color="red" content={"라이브"} />
      </BadgeContainer> */}
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>{slogan}</p>
      </Carousel.Caption>
    </BannerBox>
  );
};
