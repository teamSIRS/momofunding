import ProjectBanner from "./ProjectBanner";
import ProjectContent from "./ProjectContent";
import ProjectSidebar from "./ProjectSidebar";
import { Container, Body, Content, Side } from "./styles";

export const ProjectDetail = () => {
  return (
    <Container>
      <ProjectBanner />
      <Body>
        <Content>
          <ProjectContent />
        </Content>
        <Side>
          <ProjectSidebar />
        </Side>
      </Body>
    </Container>
  );
};
