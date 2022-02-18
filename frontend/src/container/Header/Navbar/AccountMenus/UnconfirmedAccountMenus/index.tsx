import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./LoginButton";

const SignupBtn = styled.button`
  &:hover {
    color: #c4c4c4;
    background-color: transparent;
`;

function UnconfirmedAccountMenus() {
  const navigate = useNavigate();
  const onSignupClick = () => {
    navigate("/signup");
  };
  return (
    <Nav>
      <LoginButton />
      <SignupBtn onClick={onSignupClick}>회원가입</SignupBtn>
    </Nav>
  );
}

export default UnconfirmedAccountMenus;
