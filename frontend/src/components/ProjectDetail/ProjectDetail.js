import ProjectBanner from "./ProjectBanner";
import ProjectContent from "./ProjectContent";
import ProjectSidebar from "./ProjectSidebar";
import { Container, Row } from "react-bootstrap";
import { ProjectDetailWrapper } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../App";

export const ProjectDetail = () => {

  const params = useParams();
  console.log(params.id);

  const Project= async()=>{
    await axios({
      url: `/projects/${params.id}`,
      method: "get",
      baseUrl: baseUrl,
    })
    .then((res) =>{
      // console.log('자야지');
    })
    .catch((err) =>{
      console.log(err);
      console.log(baseUrl+`/projects/${params.id}`);
    })
  }

  useEffect(()=>{
    Project();
  }, []);

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
