import { Card } from "react-bootstrap";
import { StringLiteralLike } from "typescript";
import LiveBadge from "../../Badge";
import {
  BadgeContainer,
  StyledCard,
  StyledCardImg,
  StyledLink,
} from "./styles";

export type HomeFundingCardProps = {
  // 임시로 만듦
  progress?: string;
  height?: string;
  width?: string;
  title: string;
  imgSrc: string;
  projectPath: string;
};

export const HomeFundingCard = ({
  height,
  width,
  title,
  imgSrc,
  projectPath,
  progress,
}: HomeFundingCardProps) => {
  return (
    <StyledCard height={height} width={width}>
      <StyledLink to={projectPath}>
        <StyledCardImg src={imgSrc}></StyledCardImg>
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>이것은 {title}입니다.</Card.Title>
          <BadgeContainer top="8px" right="20px">
            <LiveBadge content={"ON AIR"} color={"green"} />
          </BadgeContainer>
          <Card.Text>{progress}</Card.Text>
        </Card.ImgOverlay>
      </StyledLink>
    </StyledCard>
  );
};
