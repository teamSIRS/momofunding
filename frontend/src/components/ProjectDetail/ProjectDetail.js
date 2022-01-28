// import { Container, Col, Row } from "react-bootstrap";
import ProjectBanner from "./ProjectBanner";
import ProjectContent from "./ProjectContent";
import ProjectSidebar from "./ProjectSidebar";
import { Container, Row } from "react-bootstrap";

export const ProjectDetail = () => {
  return (
    <div>
      <ProjectBanner />
      <Container>
        <Row>
          <ProjectContent />
          <ProjectSidebar />
        </Row>
      </Container>
    </div>
  );
};
