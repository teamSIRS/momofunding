import { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoginState, nicknameState, userIdState } from "../../../../../atoms";

function ConfirmedAccountMenu() {
  // 로그인
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const nickname = useRecoilValue(nicknameState);
  const userId = useRecoilValue(userIdState);
  const navigate = useNavigate();
  const onLogoutClick = () => {
    setIsLogin(false);
    localStorage.removeItem("auth-token");
    // 로그인
    localStorage.removeItem("is-login");
    localStorage.removeItem("recoil-persist");
    // navigate("/");
    window.location.replace("/");
  };
  const onProfileClick = () => {
    navigate("users/myprojects", {
      state: {
        userId: userId,
      },
    });
    // navigate("profile/member", {
    //   state: {
    //     userId: userId,
    //   },
    // });
  };

  return (
    <Nav>
      <button onClick={onProfileClick}>{nickname} 님</button>
      <button onClick={onLogoutClick}>로그아웃</button>
    </Nav>
  );
}

export default ConfirmedAccountMenu;
