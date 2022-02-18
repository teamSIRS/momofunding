import { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoginState, nicknameState, userIdState } from "../../../../../atoms";

const MyPageBtn = styled.button`
  &:hover {
    color: #c4c4c4;
    background-color: transparent;
  }
`;
const LogoutBtn = styled(MyPageBtn)``;

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
  };
  useEffect(() => {}, [isLogin]);
  return (
    <Nav>
      <MyPageBtn onClick={onProfileClick}>{nickname} 님</MyPageBtn>
      <LogoutBtn onClick={onLogoutClick}>로그아웃</LogoutBtn>
    </Nav>
  );
}

export default ConfirmedAccountMenu;
