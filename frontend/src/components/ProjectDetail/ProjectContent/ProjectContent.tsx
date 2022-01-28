import { Outlet } from "react-router-dom";
import {
  Content,
  ContentNavbar,
  ContentNavLink,
  OutletWrapper,
} from "./styles";

export const ProjectContent = () => (
  <Content xs={8}>
    <ContentNavbar>
      <ContentNavLink to={"story"}>스토리</ContentNavLink>
      <ContentNavLink to={"notices"}>공지사항</ContentNavLink>
      <ContentNavLink to={"community"}>QnA</ContentNavLink>
    </ContentNavbar>
    <OutletWrapper>
      <Outlet />
    </OutletWrapper>
  </Content>
);
