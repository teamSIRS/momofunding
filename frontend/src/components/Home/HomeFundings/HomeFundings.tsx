import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeFundingCard from "./HomeFundingCard";
import { baseUrl } from "../../../App";
import styled from "styled-components";

export const HomeFundings = () => {
  const [projectLarge, setProjectLarge] = useState<any>("");
  const [projectSmall, setProjectSmall] = useState<any[]>([""]);

  const getProjects = async () => {
    await axios({
      url: `/projects/search?order=popularity`,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        setProjectLarge(response.data[0]);
        setProjectSmall(response.data.slice(1, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Container>
      <h2>
        <b>인기 펀딩 목록</b>
      </h2>
      <br />
      <Row md={1} lg={2} className="g-4">
        <Col>
          <HomeFundingCard
            progress={projectLarge.popularity + "% 진행 중!"}
            title={projectLarge.projectName}
            imgSrc={projectLarge.subImageUrl}
            projectPath={"projects/" + projectLarge.id}
            isLive={projectLarge.isLivePlaying}
            height={"300px"}
            width={"450px"}
          ></HomeFundingCard>
        </Col>
        <Col>
          {projectSmall.map((project, idx) => (
            <HomeFundingCard
              key={idx}
              title={project.projectName}
              imgSrc={project.subImageUrl}
              projectPath={"projects/" + project.id}
              isLive={project.isLivePlaying}
              height={"145px"}
              width={"450px"}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
