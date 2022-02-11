import { Container, Row, Col } from "react-bootstrap";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import { useMatch } from "react-router";
import ProjectManagementContentIntro from "./ProjectManagementContent/ProjectManagementContentIntro";
import ProjectManagementProfile from "./ProjectManagementContent/ProjectManagementProfile";
import ProjectManagementContentReward from "./ProjectManagementContent/ProjectManagementContentReward";
import { useRecoilValue } from "recoil";
import { createProjectIdState } from "../../atoms";

const ProjectManagementSidebarMain = styled.div`
  width: 100%;
  min-height: 1700px;
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
  const location = useLocation();
  const { userId } = location.state;
  const pjtId = useRecoilValue(createProjectIdState);
  console.log(userId);
  const navigate = useNavigate();
  const onProfileClick = () => {
    navigate("/projects/management/profile", {
      state: {
        userId: userId,
        projectId: pjtId,
      },
    });
  };
  const onIntroClick = () => {
    navigate("/projects/management/intro", {
      state: {
        userId: userId,
        projectId: pjtId,
      },
    });
  };
  const onRewardClick = () => {
    navigate("/projects/management/reward", {
      state: {
        userId: userId,
        projectId: pjtId,
      },
    });
  };
  const profileMatch = useMatch("/projects/management/profile");
  const introMatch = useMatch("/projects/management/intro");
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
                    창작자 님의 프로젝트
                  </ProjectManagementSidebarProfileTitle>
                </ProjectManagementSidebarProfileBox>
                <ProjectManagementSidebarMenu isActive={profileMatch !== null}>
                  <button onClick={onProfileClick}>창작자 프로필 등록</button>
                </ProjectManagementSidebarMenu>
                <ProjectManagementSidebarMenu isActive={introMatch !== null}>
                  <button onClick={onIntroClick}>프로젝트 정보 등록</button>
                </ProjectManagementSidebarMenu>

                <ProjectManagementSidebarMenu isActive={rewardMatch !== null}>
                  <button onClick={onRewardClick}>리워드 정보 등록</button>
                </ProjectManagementSidebarMenu>
              </ProjectManagementSidebarBox>
            </ProjectManagementSidebarMain>
          </Col>
          <Col sm={10} style={styles.col}>
            <ProjectManagementTitle>
              프로젝트 생성 페이지
            </ProjectManagementTitle>
            <Routes>
              <Route
                path="/profile"
                element={<ProjectManagementProfile />}
              ></Route>
              <Route
                path="/intro"
                element={<ProjectManagementContentIntro />}
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
