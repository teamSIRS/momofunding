import { Col, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { StyledNavLink } from "../../../container/Header/Navbar/Menus/Menu/styles";
import { MomoColor, MomoWeakColor } from "../../../shared/global";

export const Content = styled(Col)`
  max-width: 720px;
`;

export const ContentNavbar = styled(Navbar)`
  background-color: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  font-size: 18px;
  box-shadow: 0px 30px 20px -30px ${MomoColor};
  margin-bottom: 12px;
`;

export const ContentNavLink = styled(StyledNavLink)`
  position: relative;
  color: ${MomoColor};
  &:after {
    content: "";
    position: absolute;
    background-color: ${MomoWeakColor};
    height: 6px;
    width: 0;
    left: -100%;
    bottom: -27px;
    transition: 0.8s;
    border-radius: 5px;
  }
  &:hover:after {
    width: 300%;
  }
`;

export const OutletWrapper = styled.div`
  padding: 8px;
`;
