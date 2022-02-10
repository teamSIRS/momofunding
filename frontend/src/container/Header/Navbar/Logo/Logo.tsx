import { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLogo } from "./styles";
const Logo = () => {
  // const [isHovered, setHovered] = useState(false);
  // const hoverSizeUp: MouseEventHandler<HTMLAnchorElement> = () => {
  //   setHovered((isHovered) => !isHovered);
  // };
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/");
  };
  return (
    <div>
      <StyledLogo onClick={onHomeClick}>모모펀딩</StyledLogo>
    </div>
  );
};

export { Logo };
