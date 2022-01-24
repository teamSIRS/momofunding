import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  list-style-type: none;
`;

export const StyledNavItems = styled(Nav.Item)`
  margin: 10px;
`;
