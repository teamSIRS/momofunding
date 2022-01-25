import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCard = styled(Card)<{ large: boolean }>`
  border-radius: 20px;
  width: 75%;
  margin: 50px;
  border: 0px;
  height: ${(p) => (p.large ? "15rem" : "6rem")};
  overflow: hidden;
  color: white;
`;

export const StyledCardImg = styled(Card.Img)`
  border-radius: 1rem;
`;

export const StyledLink = styled(Link)`
  /* color: white; */
`;
