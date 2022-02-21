import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { MomoColor, MomoWeakColor } from "../../../../shared/global";

export const StyledLogo = styled(Navbar.Brand)`
  margin: 0px 15px;
  color: whitesmoke !important;
  font-size: xx-large;
  font-family: "Jua", sans-serif;
  display: flex;
  align-items: center;
  &:hover {
    color: ${MomoWeakColor} !important;
    cursor: pointer;
  }
  
`;

export const LogoImage = styled.img`
  margin-right: 13px;
  width: 45px;
  height: 41px;
  
`;

export const LogoBox = styled(Nav)`
  display: flex;
  align-items: center;
`;
