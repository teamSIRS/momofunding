import Menu from "./Menu";
import { StyledMenus } from "./styles";

const Menus = () => {
  return (
    <StyledMenus className="me-auto">
      <Menu path="projects" name="펀딩하기" />
      <Menu path="lives" name="라이브" />
      <Menu path="notices" name="공지사항" />
    </StyledMenus>
  );
};

export default Menus;
