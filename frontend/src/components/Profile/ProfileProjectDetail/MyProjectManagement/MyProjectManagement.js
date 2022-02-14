import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useMatch } from "react-router";
import { useRecoilValue } from "recoil";
import MyProjectManagementProfile from "./MyProjectManagementProfile";
import MyProjectManagementStory from "./MyProjectManagementStory";
import MyProjectManagementReward from "./MyProjectManagementReward";
import { nicknameState, userIdState } from "../../../../atoms";

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
  button {
    background-color: transparent;
    color: black;
    &: hover {
      background-color: #6667ab;
      color: white;
    }
    &: focus {
      background-color: #6668ab;
      color: white;
    }
  }
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

function MyProjectManagement() {
  const nickname = useRecoilValue(nicknameState);
  const { id } = useParams();
  const navigate = useNavigate();
  const onProfileClick = () => {
    navigate(`/myproject/${id}/management/profile`);
  };
  const onStoryClick = () => {
    navigate(`/myproject/${id}/management/story`);
  };
  const onRewardClick = () => {
    navigate(`/myproject/${id}/management/reward`);
  };
  const profileMatch = useMatch(`/myproject/${id}/management/profile`);
  const storyMatch = useMatch(`/myproject/${id}/management/story`);
  const rewardMatch = useMatch(`/myproject/${id}/management/reward`);
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
                    {nickname} 님의 프로젝트
                  </ProjectManagementSidebarProfileTitle>
                </ProjectManagementSidebarProfileBox>
                <ProjectManagementSidebarMenu isActive={profileMatch !== null}>
                  <button onClick={onProfileClick}>창작자 프로필 수정</button>
                </ProjectManagementSidebarMenu>
                <ProjectManagementSidebarMenu isActive={storyMatch !== null}>
                  <button onClick={onStoryClick}>프로젝트 정보 수정</button>
                </ProjectManagementSidebarMenu>

                <ProjectManagementSidebarMenu isActive={rewardMatch !== null}>
                  <button onClick={onRewardClick}>리워드 정보 수정</button>
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
                element={<MyProjectManagementProfile />}
              ></Route>
              <Route
                path="/story"
                element={<MyProjectManagementStory />}
              ></Route>

              <Route
                path="/reward"
                element={<MyProjectManagementReward />}
              ></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyProjectManagement;
