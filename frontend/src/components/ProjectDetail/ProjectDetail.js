import ProjectBanner from "./ProjectBanner";
import ProjectContent from "./ProjectContent";
import ProjectSidebar from "./ProjectSidebar";
import { Container, Row } from "react-bootstrap";
import { ProjectDetailWrapper, SetCenter } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../App";

export const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState("");

  const Project = async () => {
    await axios
      .get(baseUrl + "/projects/" + id)
      .then((res) => {
        setProject(res.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Project();
  }, []);

  return (
    <ProjectDetailWrapper>
      <ProjectBanner project={project} />
      <Container>
        <Row>
          <SetCenter>
            <ProjectContent project={project} />
            <ProjectSidebar project={project} />
          </SetCenter>
        </Row>
      </Container>
    </ProjectDetailWrapper>
  );
};
