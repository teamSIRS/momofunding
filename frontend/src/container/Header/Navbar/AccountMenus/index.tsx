import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../../../../atoms";
import { StyledMenus } from "../Menus/styles";
import ConfirmedAccountMenus from "./ConfirmedAccountMenus";
import UnconfirmedAccountMenus from "./UnconfirmedAccountMenus";

const AccountMenus = () => {
  // 로그인
  const isLogin = useRecoilValue(isLoginState);
  // const isLoginLocalState = localStorage.getItem("is-login");
  useEffect(() => {}, [isLogin]);
  return (
    <StyledMenus>
      {isLogin ? <ConfirmedAccountMenus /> : <UnconfirmedAccountMenus />}
    </StyledMenus>
  );
};

export default AccountMenus;
