import Menus from "./Menus";
import AccountMenus from "./AccountMenus";
import OpenButton from "../ProjectOpenBtn";
import { StyledNavbar } from "./styles";
import Logo from "./Logo";
import { Nav, NavbarProps, Container } from "react-bootstrap";

const NavBar = (p: NavbarProps) => {
  return (
    <StyledNavbar sticky={p.sticky} expand={p.expand}>
      <Container>
        <Nav>
          <Logo />
          <Menus />
        </Nav>
        <Nav>
          <OpenButton />
          <AccountMenus />
        </Nav>
      </Container>
    </StyledNavbar>
  );
};
export default NavBar;
