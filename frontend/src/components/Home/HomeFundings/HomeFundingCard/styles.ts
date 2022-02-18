import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCard = styled(Card)<{ height: string; width: string }>`
  position: flex;
  border-radius: 20px;
  width: ${({ width }) => width};
  margin: auto;
  margin-bottom: 10px;
  border: 0px;
  height: ${({ height }) => height};
  overflow: hidden;
  color: white;
  transition: cubic-bezier(0.86, 0, 0.07, 1);
  &:hover {
    filter: brightness(65%);
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }
`;

export const StyledCardImg = styled(Card.Img)`
  border-radius: 1rem;
`;

export const StyledLink = styled(Link)`
  /* color: white; */
`;

export const BadgeContainer = styled.div<{
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
}>`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;
