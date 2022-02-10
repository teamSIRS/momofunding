import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledLogo = styled(Navbar.Brand)`
  margin: 10px;
  color: white;
  font-size: xx-large;
  text-decoration: none;
  font-family: "Jua", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;
