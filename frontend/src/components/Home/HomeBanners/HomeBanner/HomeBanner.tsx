import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { ImageForBg } from "../../../Live/LiveMain/Chat/styles";
import { BadgeContainer } from "../../HomeFundings/HomeFundingCard/styles";
import { BannerBox, StyledImg } from "./styles";

export type HomeBannerProps = {
  index: number;
  imgSrc: string;
  title: string;
  slogan: string;
};

const MessageTitle = styled.div`
  font-size: 25px;
  color: white;
  position: absolute;
  top: 30%;
  left: 20%;
`;

const Message = styled(MessageTitle)`
  font-size: 35px;
  font-weight: bold;
  top: 35%;
  margin-top: 20px;
`;
function HomeBanner({ index, imgSrc, title, slogan }: HomeBannerProps) {
  return (
    <BannerBox>
      <StyledImg src={imgSrc} alt={index.toString()} />

      <MessageTitle>펀딩의 첫 시작</MessageTitle>
      <Message as={"p"}>
        성공적인 첫 펀딩을 위해, <br />
        모모펀딩으로 시작하세요.
      </Message>
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>{slogan}</p>
      </Carousel.Caption>
    </BannerBox>
  );
}
export default HomeBanner;
