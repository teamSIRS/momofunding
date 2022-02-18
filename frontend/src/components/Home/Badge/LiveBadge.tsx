import { Spinner } from "react-bootstrap";
import { StyledSpan } from "./styles";

type LiveBadgeProps = {
  content: string;
  color: "momo" | "green" | "red";
};

export const LiveBadge = ({ content, color }: LiveBadgeProps) => {
  return (
    <StyledSpan color={color}>
      {content} <Spinner as="span" animation="grow" size="sm"></Spinner>
    </StyledSpan>
  );
};
