import { StyledNavItems, StyledNavLink } from "./styles";
import { Dispatch, SetStateAction } from "react";

export type MenuProps = {
  setAuth?: Dispatch<SetStateAction<boolean>>;
  name?: string;
  path?: string;
};
const Menu = ({ path = "#", name = "", setAuth }: MenuProps) => {
  return (
    <StyledNavItems onClick={setAuth}>
      <StyledNavLink end to={path}>
        {name}
      </StyledNavLink>
    </StyledNavItems>
  );
};

export default Menu;
