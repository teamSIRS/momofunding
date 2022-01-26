import Menu from "./Menu";
import { StyledMenus } from "./styles";

const Menus = () => {
  return (
    <StyledMenus className="me-auto">
      <Menu path="projects" name="펀딩하기" />
      <Menu path="lives" name="라이브" />
      <Menu path="notices" name="공지사항" />
      {/* <Menu path="findId" name="아찾" />
      <Menu path="findPw" name="비찾" />
      <Menu path="changePw" name="비변" /> */}
      <Menu path="findAccount" name="아디비번찾기" />
      <Menu path="changePw" name="비밀번호 재설정" />
    </StyledMenus>
  );
};

export default Menus;
