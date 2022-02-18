import { Outlet } from "react-router-dom";
import {
  Content,
  ContentNavbar,
  ContentNavLink,
  OutletWrapper,
} from "./styles";


interface Props {
  projcet: any,
}

export const ProjectContent:React.FC<Props> = ({...props}) => (
  <Content className="col-8">
    <ContentNavbar>
      <ContentNavLink to={"story"}> </ContentNavLink>
      {/* <ContentNavLink to={"notices"}>공지사항</ContentNavLink>
      <ContentNavLink to={"community"}>응원하기</ContentNavLink> */}
    </ContentNavbar>
    <OutletWrapper>
      <Outlet />
    </OutletWrapper>
  </Content>
);
