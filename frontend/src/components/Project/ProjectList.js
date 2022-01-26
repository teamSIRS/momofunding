// // 카드로 여러개 나열되어 있는 페이지
import { Col, Container, Row } from 'react-bootstrap';
import ProjectNav from "./ProjectNav";
import ProjectCard from "./ProjectCard";
import styled from 'styled-components';

const ListCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProjectList(){
  return(
    <>
      <ProjectNav />

      <Container>
        <ListCenter>
          <Row>
            <Col>
              <ProjectCard></ProjectCard>
            </Col>
            <Col>
              <ProjectCard></ProjectCard>
            </Col>
            <Col>
              <ProjectCard></ProjectCard>
            </Col>
          </Row>
        </ListCenter>
        <ListCenter>
          <Row>
            <Col>
              <ProjectCard></ProjectCard>
            </Col>
            <Col>
              <ProjectCard></ProjectCard>
            </Col>
            <Col>
              <ProjectCard></ProjectCard>
            </Col>
          </Row>
        </ListCenter>
      </Container>
    </>
  );
}

export default ProjectList;