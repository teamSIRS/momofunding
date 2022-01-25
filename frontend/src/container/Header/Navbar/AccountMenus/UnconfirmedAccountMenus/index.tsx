import { Dispatch, SetStateAction } from "react";
import { Nav } from "react-bootstrap";
import Menu from "../../Menus/Menu";
export type AccountMenusProp = {
  setAuth: Dispatch<SetStateAction<boolean>>;
};
const UnconfirmedAccountMenus = ({ setAuth }: AccountMenusProp) => {
  return (
    <Nav>
      <Menu setAuth={setAuth} path="login" name="로그인" />
      <Menu path="signup" name="회원가입" />
    </Nav>
  );
};

export default UnconfirmedAccountMenus;
