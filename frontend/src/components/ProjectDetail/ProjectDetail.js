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
  const [sessionId, setSessionId] = useState("");
  const [onAir, setOnAir] = useState(false);

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

  const getLiveState = async () => {
    await axios({
      url: "/projects/" + id + "/is-play-live",
      method: "get",
      data: {},
      baseURL: baseUrl,
    })
      .then((response) => {
        setOnAir(response.data.isPlayLive);
      })
      .catch((error) => {
        // .catch는 axios 요청 실패시 작업
        console.log(error); // error 메세지 확인
      });
  };

  const getSessionId = async () => {
    await axios({
      url: "/projects/live/session-id/" + id,
      method: "get",
      data: {},
      baseURL: baseUrl,
    })
      .then((response) => {
        setSessionId(response.data.sessionId);
      })
      .catch((error) => {
        // .catch는 axios 요청 실패시 작업
        console.log(error); // error 메세지 확인
      });
  };

  useEffect(() => {
    Project();
    getLiveState();
    getSessionId();
  }, []);

  return (
    <ProjectDetailWrapper>
      <ProjectBanner 
      project={project}
      onAir = {onAir}
      sessionId = {sessionId}
      />
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
