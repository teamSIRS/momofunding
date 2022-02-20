import { useNavigate } from "react-router-dom";
import { StyledMenus } from "../Menus/styles";
import { LogoBox, LogoImage, StyledLogo } from "./styles";
const Logo = () => {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/");
  };
  return (
    <LogoBox>
      <StyledLogo onClick={onHomeClick}>
        <LogoImage src="/Logos/MainLogo.png" />
        모모펀딩
      </StyledLogo>
    </LogoBox>
  );
};

export { Logo };
