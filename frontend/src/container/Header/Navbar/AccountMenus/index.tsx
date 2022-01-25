import { useState } from "react";
import { StyledMenus } from "../Menus/styles";
import UnconfirmedAccountMenus from "./UnconfirmedAccountMenus";
import ConfirmedAccountMenus from "./ConfirmedAccountMenus";

const AccountMenus = () => {
  const [auth, setAuth] = useState(false);
  const logIn = () => {
    setAuth(true);
  };
  const logOut = () => {
    setAuth(false);
  };

  return (
    <StyledMenus>
      {auth ? (
        <ConfirmedAccountMenus setAuth={logOut} />
      ) : (
        <UnconfirmedAccountMenus setAuth={logIn} />
      )}
    </StyledMenus>
  );
};

export default AccountMenus;
