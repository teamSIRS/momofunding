import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import setAuthorizationToken, {
  createProjectIdState,
  nicknameState,
  userIdState,
} from "../../atoms";
import axios from "axios";
import { baseUrl } from "../../App";
import { useState } from "react";
import swal from "sweetalert";

const ProjectEntranceBanner = styled.div`
  width: 100%;
  height: 480px;
  position: relative;
`;

const ProjectEntrancePhoto = styled.img`
  width: 100%;
  height: 450px;
  filter: brightness(60%);
`;
const ProjectEntranceBannerText = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ProjectEntranceBannerMessage = styled.div`
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

const ProjectEntranceSeparateLine = styled.hr`
  background-color: #6667ab;
  width: 75%;
  margin: 40px auto;
`;

const ProjectStartBtn = styled(Button)`
  margin-top: 20px;
`;

const ProjectContentMain = styled.div`
  width: 100%;
  height: 900px;
  /* background-color: green; */
`;

const ProjectContentItemBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectContentItems = styled.div`
  text-align: center;
`;

const ProjectContentIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 40px;
  display: block;
  background-color: whitesmoke;
  border-radius: 5px;
`;

const ProjectContentIconTitle = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const ProjectContentTextBox = styled.div`
  width: 70%;
  height: 570px;
  margin: auto;
  /* background-color: whitesmoke; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectContentText = styled.div`
  margin: 20px;
  font-size: 20px;
`;

const ProjectEntranceMain = styled.div`
  margin-bottom: 60px;
`;

const Title = styled.h3`
  font-weight: bold;
`;

function ProjectEntrance() {
  window.scrollTo(0, 0); //페이지 위로 가게하기

  const userId = useRecoilValue(userIdState);
  const [createPjt, setCreatePjtId] = useRecoilState(createProjectIdState);
  const nickname = useRecoilValue(nicknameState);
  const [projectId, setProjectId] = useState(0);
  const navigate = useNavigate();
  const goToProject = (pjtId) => {
    navigate("/projects/management/profile", {
      state: {
        userId: userId,
        projectId: pjtId,
      },
    });
  };

  function startProject() {
    const startProject = async () => {
      await axios({
        url: `/projects`,
        method: "post",
        data: {
          userId: userId,
        },
        headers: setAuthorizationToken(),
        baseURL: baseUrl,
      })
        .then((response) => {
          setProjectId(response.data.projectId);
          setCreatePjtId(response.data.projectId);
          goToProject(response.data.projectId);
        })
        .catch((error) => {
          swal(
            "먼저 로그인을 진행해주세요!",
            "메인 페이지로 이동합니다.",
            "warning",
            {
              button: false,
            }
          );
          navigate("/");
          console.log(error);
        });
    };
    startProject();
  }
  return (
    <div>
      <ProjectEntranceMain>
        <ProjectEntranceBanner>
          <ProjectEntrancePhoto
            src="/photo/ProjectEntrancePhoto.png"
            alt="entrance_image"
          />
          <ProjectEntranceBannerText>
            <ProjectEntranceBannerMessage>
              함께 만들어가는 나만의 비즈니스.
              <br />
              모모펀딩을 통해 성공을 경험해 보세요.
            </ProjectEntranceBannerMessage>
            <ProjectStartBtn onClick={startProject}>
              모모펀딩 프로젝트 생성
            </ProjectStartBtn>
            <ProjectEntranceSeparateLine />
          </ProjectEntranceBannerText>
        </ProjectEntranceBanner>
        <ProjectContentMain>
          <ProjectContentItemBox>
            <ProjectContentItems>
              <ProjectContentIcon
                src="/photo/ProjectEntranceMedal.png"
                alt="medal_image"
              />
              <ProjectContentIconTitle>
                성공적인 목표 달성
              </ProjectContentIconTitle>
            </ProjectContentItems>
            <ProjectContentItems>
              <ProjectContentIcon
                src="/photo/ProjectEntrancePig.png"
                alt="pig_image"
              />
              <ProjectContentIconTitle>효율적인 펀딩</ProjectContentIconTitle>
            </ProjectContentItems>
            <ProjectContentItems>
              <ProjectContentIcon
                src="/photo/ProjectEntranceHorse.png"
                alt="horse_image"
              />
              <ProjectContentIconTitle>가파른 성장</ProjectContentIconTitle>
            </ProjectContentItems>
            <ProjectContentItems>
              <ProjectContentIcon
                src="/photo/ProjectEntranceList.png"
                alt="list_image"
              />
              <ProjectContentIconTitle>안정적인 서비스</ProjectContentIconTitle>
            </ProjectContentItems>
            <ProjectContentItems>
              <ProjectContentIcon
                src="/photo/ProjectEntranceChart.png"
                alt="chart_image"
              />
              <ProjectContentIconTitle>결과 분석</ProjectContentIconTitle>
            </ProjectContentItems>
          </ProjectContentItemBox>
          <ProjectEntranceSeparateLine />
          <ProjectContentTextBox>
            <ProjectContentText>
              <Title>지금 도전해 보세요!</Title>
              <br />
              심사가 진행되기 전에는 누구도
              <b> {nickname ? nickname : "창작자"}</b>님의 프로젝트를 볼 수
              없으니 걱정 마세요! <br />
              지금 프로젝트를 시작하시면 모모펀딩 100% 성공 노하우를
              보내드립니다.
              <br />
              <br />
              <b>1. 목표 금액</b> <br />
              목표 금액이 높다고 펀딩 금액이 높아지진 않습니다. 목표 금액보다
              달성률이 더욱 돋보인다는 사실! 펀딩 기간과 리워드 금액, 수수료
              등을 고려하여 설정하세요. <br />
              <br />
              <b>2. 펀딩 기간</b> <br />
              펀딩 프로젝트 평균 기간은 30~50일 이내로, 프로젝트가 대중들에게
              흥미를 일으킬 수 있도록 이벤트처럼 짧은 기간 동안 진행하는 것이
              좋습니다. <br />
              <br />
              <b>3. 리워드</b> <br />
              1개 이상의 리워드는 필수입니다. 얼리버드, 세트 구성 등의 리워드를
              설계하세요. 펀딩 성공률을 높일 수 있는 가장 중요한 요소가 될 수
              있습니다. <br />
              <br />
              <b>4. 스토리</b> <br />
              지인에게 설명하듯이 설득시킬 수 있는 쉬운 설명으로 스토리를
              구성하세요. 사진 콘텐츠가 있다면 더 좋습니다.
            </ProjectContentText>
          </ProjectContentTextBox>
        </ProjectContentMain>
      </ProjectEntranceMain>
    </div>
  );
}

export default ProjectEntrance;
