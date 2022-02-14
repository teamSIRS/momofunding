import { Card } from "react-bootstrap";
import LiveBadge from "../../Badge";
import { StyledSpan } from "../../Badge/styles";
import {
  BadgeContainer,
  StyledCard,
  StyledCardImg,
} from "../../HomeFundings/HomeFundingCard/styles";

export type HomeLiveCardProps = {
  idx: number;
  title: string;
  viewer: number;
};

export const HomeLiveCard = ({ idx, title, viewer }: HomeLiveCardProps) => {
  return (
    <StyledCard key={idx} height={"15.5rem"} width={"275px"}>
      <StyledCardImg
        src={
          "https://cdn.pixabay.com/photo/2020/02/22/18/49/paper-4871355_960_720.jpg"
        }
      ></StyledCardImg>
      <Card.ImgOverlay>
        <StyledSpan color="rgba(0,0,0,54%)">
          {String(title).length > 20
            ? `${String(title).slice(0, 20)}...`
            : String(title)}
        </StyledSpan>
      </Card.ImgOverlay>
      <BadgeContainer bottom={"15px"} left={"5px"}>
        <LiveBadge content={"LIVE"} color={"momo"}></LiveBadge>
        <StyledSpan color="rgba(0,0,0,30%)">{viewer}명 시청 중</StyledSpan>
      </BadgeContainer>
    </StyledCard>
  );
};
