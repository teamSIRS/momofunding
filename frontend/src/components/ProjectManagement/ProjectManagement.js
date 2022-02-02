import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { useMatch } from "react-router";
import ProjectManagementContentIntro from "./ProjectManagementContent/ProjectManagementContentIntro";
import ProjectManagementContentProfile from "./ProjectManagementContent/ProjectManagementContentProfile";
import ProjectManagementContentReward from "./ProjectManagementContent/ProjectManagementContentReward";
import ProjectManagementContentStory from "./ProjectManagementContent/ProjectManagementContentStory";

const ProjectManagementSidebarMain = styled.div`
  width: 100%;
  min-height: 1200px;
  background-color: #f8f4ea;
`;

const ProjectManagementSidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: start;
`;

const ProjectManagementSidebarProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
`;

const ProjectManagementSidebarProfileImg = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-bottom: 10px;
`;
const ProjectManagementSidebarProfileTitle = styled.div`
  font-weight: bold;
`;

const ProjectManagementSidebarMenu = styled.div`
  margin: 25px;
  font-size: 17px;
  font-weight: bold;
`;

const ProjectManagementTitle = styled.h2`
  text-align: center;
  margin: 30px 0px;
  font-weight: bold;
`;

const CustomLink = styled(Link)`
  color: black;
  padding: 0px 10px;
  text-decoration: none;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #6c6db5;
    color: white;
  }
`;

const styles = {
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
};

function ProjectManagement() {
  const profileMatch = useMatch("/projects/management/profile");
  const introMatch = useMatch("/projects/management/intro");
  const storyMatch = useMatch("/projects/management/storyInfo");
  const rewardMatch = useMatch("/projects/management/reward");
  return (
    <div>
      <Container>
        <Row>
          <Col sm={2} style={styles.col}>
            <ProjectManagementSidebarMain>
              <ProjectManagementSidebarBox>
                <ProjectManagementSidebarProfileBox>
                  <ProjectManagementSidebarProfileImg src="/photo/profile.png" />
                  <ProjectManagementSidebarProfileTitle>
                    아이조아 님의 프로젝트
                  </ProjectManagementSidebarProfileTitle>
                </ProjectManagementSidebarProfileBox>
                <ProjectManagementSidebarMenu isActive={profileMatch !== null}>
                  <CustomLink to={`/projects/management/profile`}>
                    창작자 프로필 등록
                  </CustomLink>
                </ProjectManagementSidebarMenu>
                <ProjectManagementSidebarMenu isActive={introMatch !== null}>
                  <CustomLink to={`/projects/management/intro`}>
                    프로젝트 소개
                  </CustomLink>
                </ProjectManagementSidebarMenu>
                <ProjectManagementSidebarMenu isActive={storyMatch !== null}>
                  <CustomLink to={`/projects/management/storyInfo`}>
                    프로젝트 스토리
                  </CustomLink>
                </ProjectManagementSidebarMenu>
                <ProjectManagementSidebarMenu isActive={rewardMatch !== null}>
                  <CustomLink to={`/projects/management/reward`}>
                    리워드 정보
                  </CustomLink>
                </ProjectManagementSidebarMenu>
              </ProjectManagementSidebarBox>
            </ProjectManagementSidebarMain>
          </Col>
          <Col sm={10} style={styles.col}>
            <ProjectManagementTitle>
              프로젝트 관리 페이지
            </ProjectManagementTitle>
            <Routes>
              <Route
                path="/profile"
                element={<ProjectManagementContentProfile />}
              ></Route>
              <Route
                path="/intro"
                element={<ProjectManagementContentIntro />}
              ></Route>
              <Route
                path="/storyInfo"
                element={<ProjectManagementContentStory />}
              ></Route>
              <Route
                path="/reward"
                element={<ProjectManagementContentReward />}
              ></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectManagement;
