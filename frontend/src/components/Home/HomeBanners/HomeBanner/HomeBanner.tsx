import { Carousel } from "react-bootstrap";
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
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>{slogan}</p>
      </Carousel.Caption>
    </BannerBox>
  );
};
