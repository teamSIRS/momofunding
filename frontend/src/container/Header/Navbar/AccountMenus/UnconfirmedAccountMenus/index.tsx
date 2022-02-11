import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";

function UnconfirmedAccountMenus() {
  const navigate = useNavigate();
  const onSignupClick = () => {
    navigate("/signup");
  };
  return (
    <Nav>
      <LoginButton />
      <button onClick={onSignupClick}>회원가입</button>
    </Nav>
  );
}

export default UnconfirmedAccountMenus;
