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
  subImg: string;
};

export const HomeLiveCard = ({ idx, title, viewer, subImg }: HomeLiveCardProps) => {
  return (
    <StyledCard key={idx} height={"15.5rem"} width={"275px"}>
      <StyledCardImg
        src={subImg}
      ></StyledCardImg>
      <Card.ImgOverlay>
        <StyledSpan color="rgba(0,0,0,54%)">
          {String(title).length > 20
            ? `${String(title).slice(0, 20)}...`
            : String(title)}
        </StyledSpan>
      </Card.ImgOverlay>
      <BadgeContainer bottom={"15px"} left={"15px"}>
        <LiveBadge content={"LIVE"} color={"momo"}></LiveBadge>
        <StyledSpan color="rgba(0,0,0,30%)">{viewer}명 시청 중</StyledSpan>
      </BadgeContainer>
    </StyledCard>
  );
};
