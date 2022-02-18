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
import setAuthorizationToken, {
  createProjectIdState,
  nicknameState,
  userIdState,
} from "../../atoms";
import axios from "axios";
import { baseUrl } from "../../App";
import swal from "sweetalert";

const ProjectManagementSidebarMain = styled.div`
  width: 95%;
  min-height: 100%;
  background-color: #e3e3ef;
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

const ProjectManagementSidebarMenus = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

function ProjectManagement() {
  const userId = useRecoilValue(userIdState);
  const nickname = useRecoilValue(nicknameState);
  const pjtId = useRecoilValue(createProjectIdState);
  const navigate = useNavigate();
  const [isUpdateCreator, setIsUpdateCreator] = useState(false);
  const [isUpdateProject, setIsUpdateProject] = useState(false);
  const [isUpdateRewards, setIsUpdateRewards] = useState(false);

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
      url: `/creators/` + pjtId,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        if (response.data.creatorName != "") setIsUpdateCreator(true);
        else setIsUpdateCreator(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProject = async () => {
    await axios({
      url: `/projects/` + pjtId,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        if (response.data.projectName !== "") setIsUpdateProject(true);
        else setIsUpdateProject(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRewards = async () => {
    await axios({
      url: `/rewards/projects/` + pjtId,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        if (response.data.length >= 1) setIsUpdateRewards(true);
        else setIsUpdateRewards(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function startPjt() {
    if (!isUpdateCreator) {
      getCreator();
      if (!isUpdateCreator) {
        swal("창작자 작성 페이지를 확인해주세요. 작성이 완료되지 않았습니다.");
        return;
      }
    }
    if (!isUpdateProject) {
      getProject();
      if (!isUpdateProject) {
        swal(
          "프로젝트 작성 페이지를 확인해주세요. 작성이 완료되지 않았습니다."
        );
        return;
      }
    }
    if (!isUpdateRewards) {
      getRewards();
      if (!isUpdateRewards) {
        swal(
          "리워드 작성 페이지를 확인해주세요. 리워드가 한 개 이상 필요합니다."
        );
        return;
      }
    }

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
          navigate(`/`);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    swal({
      title: "프로젝트를 지금 시작하실래요?",
      text: "지금 바로 프로젝트를 시작합니다!\n시작 이후에는 프로젝트 편집이 불가능합니다.\n각 화면에서 등록 및 저장을 누르지 않은 경우는 저장되지 않습니다.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((response) => {
      if (response) {
        swal("프로젝트가 시작되었습니다.").then((response) => {
          startPjt();
          navigate(`/`);
        });
      }
    });
  }

  const backHome = () => {
    swal({
      title: "프로젝트를 나중에 시작하실래요?",
      text: "지금 이상태로 프로필 화면에 저장됩니다.\n시작 전까지 얼마든지 편집하실 수 있습니다!\n각 화면에서 등록 및 저장을 누르지 않은 경우는 저장되지 않습니다.",
      icon: "success",
      buttons: true,
      dangerMode: true,
    }).then((response) => {
      if (response) {
        swal("프로젝트를 저장하고 메인 화면으로 돌아갑니다.").then(
          (response) => {
            navigate(`/`);
          }
        );
      }
    });
  };

  useEffect(() => {
    if (!isUpdateCreator) getCreator();
    if (!isUpdateProject) getProject();
    if (!isUpdateRewards) getRewards();
    window.scrollTo(0, 0);
  }, []);

  const profileMatch = useMatch("/projects/management/profile");
  const introMatch = useMatch("/projects/management/intro");
  const rewardMatch = useMatch("/projects/management/reward");
  return (
    <div>
      <Container>
        <Row>
          <Col sm={3} style={styles.col}>
            <ProjectManagementSidebarMain>
              <ProjectManagementSidebarBox>
                <ProjectManagementSidebarProfileBox>
                  <ProjectManagementSidebarProfileImg src="/photo/profile.png" />
                  <ProjectManagementSidebarProfileTitle>
                    {nickname}님의 프로젝트
                  </ProjectManagementSidebarProfileTitle>
                </ProjectManagementSidebarProfileBox>
                <ProjectManagementSidebarMenus>
                  <ProjectManagementSidebarMenu
                    isActive={profileMatch !== null}
                  >
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
                  <ProjectManagementSidebarMenuFinal>
                    <button onClick={backHome}>나중에 시작하기</button>
                  </ProjectManagementSidebarMenuFinal>
                </ProjectManagementSidebarMenus>
              </ProjectManagementSidebarBox>
            </ProjectManagementSidebarMain>
          </Col>
          <Col sm={9} style={styles.col}>
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
