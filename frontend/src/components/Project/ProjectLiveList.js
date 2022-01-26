import { Col, Container, Row } from 'react-bootstrap';
import ProjectNav from "./ProjectNav";
import ProjectLiveCard from './ProjectLiveCard';
import styled from 'styled-components';

const ListCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProjectLiveList(){
    return(
        <>
            <ProjectNav/>
            <Container>
                <ListCenter>
                <Row>
                    <Col>
                    <ProjectLiveCard></ProjectLiveCard>
                    </Col>
                    <Col>
                    <ProjectLiveCard></ProjectLiveCard>
                    </Col>
                </Row>
                </ListCenter>
                <ListCenter>
                <Row>
                    <Col>
                    <ProjectLiveCard></ProjectLiveCard>
                    </Col>
                    <Col>
                    <ProjectLiveCard></ProjectLiveCard>
                    </Col>
                </Row>
                </ListCenter>
            </Container>
        </>
    );
}

export default ProjectLiveList;