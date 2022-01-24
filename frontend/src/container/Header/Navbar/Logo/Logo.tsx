import { MouseEventHandler, useState } from "react";
import { StyledLogo } from "./styles";
const Logo = () => {
  const [isHovered, setHovered] = useState(false);
  const hoverSizeUp: MouseEventHandler<HTMLAnchorElement> = () => {
    setHovered((isHovered) => !isHovered);
  };
  return (
    <div>
      <StyledLogo href="/">모모펀딩</StyledLogo>
    </div>
  );
};

export { Logo };
