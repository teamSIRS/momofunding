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
import ProjectManagementReward from "./ProjectManagementContent/ProjectManagementReward";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import setAuthorizationToken, { createProjectIdState, userIdState } from "../../atoms";
import axios from "axios";
import { baseUrl } from "../../App";
import swal from "sweetalert";
import LoginButton from "../../container/Header/Navbar/AccountMenus/UnconfirmedAccountMenus/LoginButton";

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
const ProjectManagementSidebarMenuFinal = styled(ProjectManagementSidebarMenu)`
  button {
    background-color: transparent;
    color: black;
    &: hover {
      background-color: purple;
      color: white;
    }
    &: focus {
      background-color: purple;
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

function ProjectManagement() {
  const location = useLocation();
  const { userId } = useRecoilValue(userIdState);
  const pjtId = useRecoilValue(createProjectIdState);
  const navigate = useNavigate();
  const [isUpdatecreator, setIsUpdateCreator] = useState("");
  const [isUpdateProject, setIsUpdateProject] = useState("");
  const [isUpdaterewards, setIsUpdateRewards] = useState([""]);

  const onProfileClick = () => {
    navigate(`/projects/management/profile`, {
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

  const getCreator = async () => {
    await axios({
      url: `/creators/`+pjtId,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        if(response.data.creatorName != "") setIsUpdateCreator(true);
        else setIsUpdateCreator(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProject = async () => {
    await axios({
      url: `/projects/`+pjtId,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        if(response.data.projectName != "") setIsUpdateProject(true);
        else setIsUpdateProject(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRewards = async () => {
    await axios({
      url: `/rewards/projects/`+pjtId,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        if(response.data.length > 0) setIsUpdateRewards(true);
        else setIsUpdateRewards(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  function startPjt() {
    getCreator().then(() => {
      if(!isUpdatecreator){
        swal("창작자 작성 페이지를 확인해주세요. 작성이 완료되지 않았습니다.");
        return;
      }
    });

    

    getProject();
    if(!isUpdateProject){
      swal("프로젝트 작성 페이지를 확인해주세요. 작성이 완료되지 않았습니다.");
      return;
    }

    getRewards();
    if(!isUpdaterewards){
      swal("리워드 작성 페이지를 확인해주세요. 리워드가 하나도 없습니다.");
      return;
    }
    // 나중에swal로 변경하자
    swal("프로젝트가 시작됩니다!");
    const startPjt = async () => {
      await axios({
        url: `/projects/${pjtId}/complete`,
        method: "put",
        data: {
          projectId: pjtId,
        },
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          console.log("프로젝트 시작");
          console.log(response.data);
        })
        .catch((error) => {
          console.log("에러발생");
          console.log(error);
        });
    };
    startPjt();
  }

  useEffect(()=>{
    getCreator();
    getProject();
    getRewards();
  }, [])

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

                <ProjectManagementSidebarMenuFinal>
                  <button onClick={startPjt}>프로젝트 시작하기</button>
                </ProjectManagementSidebarMenuFinal>
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
                element={<ProjectManagementReward />}
              ></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectManagement;
