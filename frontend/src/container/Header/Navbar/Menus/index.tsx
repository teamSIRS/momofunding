import Menu from "./Menu";
import { StyledMenus } from "./styles";

const Menus = () => {
  return (
    <StyledMenus className="me-auto">
      <Menu path="projects" name="펀딩하기" />
      <Menu path="lives" name="라이브" />
      <Menu path="notices" name="공지" />
      <Menu path="notices/create" name="공지쓰기" />
      <Menu path="notices/detail" name="공지보기" />
      {/* <Menu path="findId" name="아찾" />
      <Menu path="findPw" name="비찾" />
      <Menu path="changePw" name="비변" /> */}
      {/* <Menu path="findAccount" name="아비찾" /> */}
      <Menu path="changePw" name="비재설" />
      <Menu path="funding" name="후원" />
      <Menu path="profile/member" name="회원수정" />
      {/* <Menu path="projects/management" name="플젝관리" /> */}
    </StyledMenus>
  );
};

export default Menus;
