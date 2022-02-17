import { Card } from "react-bootstrap";
import styled from "styled-components";
import LiveBadge from "../../Badge";
import {
  BadgeContainer,
  StyledCard,
  StyledCardImg,
  StyledLink,
} from "./styles";

export type HomeFundingCardProps = {
  progress?: any;
  height?: any;
  width?: any;
  title: any;
  imgSrc: any;
  projectPath: any;
  isLive: any;
};
export const HomeFundingCard = ({
  height,
  width,
  title,
  imgSrc,
  projectPath,
  progress,
  isLive,
}: HomeFundingCardProps) => {
  return (
    <StyledCard height={height} width={width}>
      <StyledLink to={projectPath}>
        <StyledCardImg
          src={imgSrc}
          style={{ filter: "brightness(67%)" }}
        ></StyledCardImg>
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>{title}</Card.Title>
          <BadgeContainer top="20px" right="10px">
            {isLive ? <LiveBadge content={"Live"} color={"red"} /> : null}
          </BadgeContainer>
          <Card.Text>{progress}</Card.Text>
        </Card.ImgOverlay>
      </StyledLink>
    </StyledCard>
  );
};
