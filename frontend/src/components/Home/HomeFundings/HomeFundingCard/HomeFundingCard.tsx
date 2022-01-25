import { Card } from "react-bootstrap";
import LiveBadge from "../../Badge";
import { StyledCard, StyledCardImg, StyledLink } from "./styles";

export type HomeFundingCardProps = {
  // 임시로 만듦
  progress?: string;
  large?: boolean;
  title: string;
  imgSrc: string;
  projectPath: string;
};

export const HomeFundingCard = ({
  large = false,
  title,
  imgSrc,
  projectPath,
  progress,
}: HomeFundingCardProps) => {
  return (
    <StyledCard large={large}>
      <StyledLink to={projectPath}>
        <StyledCardImg src={imgSrc}></StyledCardImg>
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>이것은 {title}입니다.</Card.Title>
          <div className="position-absolute top-0 end-0">
            <LiveBadge content={"ON AIR"} color={"green"} />
          </div>
          <Card.Text>{progress}</Card.Text>
        </Card.ImgOverlay>
      </StyledLink>
    </StyledCard>
  );
};
