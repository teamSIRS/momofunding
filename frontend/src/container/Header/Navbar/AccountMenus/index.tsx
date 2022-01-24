import { useState } from "react";
import { StyledMenus } from "../Menus/styles";
import ConfirmedAccountMenus from "./ConfirmedAccountMenus";
import UnconfirmedAccountMenus from "./UnconfirmedAccountMenus";

const AccountMenus = () => {
  const [auth, setAuth] = useState(false);
  const logIn = () => {
    setAuth((now) => !now);
  };

  const logOut = () => {
    setAuth((now) => !now);
  };

  return (
    <StyledMenus>
      {auth ? (
        <UnconfirmedAccountMenus setAuth={logIn} />
      ) : (
        <ConfirmedAccountMenus setAuth={logOut} />
      )}
    </StyledMenus>
  );
};

export default AccountMenus;
