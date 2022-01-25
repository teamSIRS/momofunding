import { Nav } from "react-bootstrap";
import Menu from "../../Menus/Menu";
import { AccountMenusProp } from "../UnconfirmedAccountMenus";

const ConfirmedAccountMenu = ({ setAuth }: AccountMenusProp) => (
  <Nav>
    <Menu setAuth={setAuth} path="users" name="로그아웃" />
    <Menu path="users" name="프로필" />
  </Nav>
);

export default ConfirmedAccountMenu;
