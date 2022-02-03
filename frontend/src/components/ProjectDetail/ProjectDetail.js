import ProjectBanner from "./ProjectBanner";
import ProjectContent from "./ProjectContent";
import ProjectSidebar from "./ProjectSidebar";
import { Container, Row } from "react-bootstrap";
import { ProjectDetailWrapper } from "./styles";

export const ProjectDetail = () => {
  return (
    <ProjectDetailWrapper>
      <ProjectBanner />
      <Container>
        <Row>
          <ProjectContent />
          <ProjectSidebar />
        </Row>
      </Container>
    </ProjectDetailWrapper>
  );
};
