import { useRecoilValue } from "recoil";
import { isLoginState } from "../../../../atoms";
import { StyledMenus } from "../Menus/styles";
import ConfirmedAccountMenus from "./ConfirmedAccountMenus";
import UnconfirmedAccountMenus from "./UnconfirmedAccountMenus";

const AccountMenus = () => {
  const isLogin = useRecoilValue(isLoginState);

  console.log("로그인여부");
  console.log(isLogin);
  console.log("로그인여부");
  return (
    <StyledMenus>
      {isLogin ? <ConfirmedAccountMenus /> : <UnconfirmedAccountMenus />}
    </StyledMenus>
  );
};

export default AccountMenus;
