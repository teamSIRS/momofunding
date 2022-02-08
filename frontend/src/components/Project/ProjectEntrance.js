import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProjectEntranceBanner = styled.div`
  width: 100%;
  height: 380px;
  position: relative;
`;

const ProjectEntrancePhoto = styled.img`
  width: 100%;
  height: 350px;
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
  height: 700px;
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
  height: 400px;
  margin: auto;
  /* background-color: whitesmoke; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectContentText = styled.p`
  margin: 20px;
  font-size: 20px;
`;

function ProjectEntrance() {
  const navigate = useNavigate();
  const goToProject = () => {
    navigate("/projects/management/profile");
  };
  return (
    <div>
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
          <ProjectStartBtn onClick={goToProject}>
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
            국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여
            노력하여야 한다. 정당의 목적이나 활동이 민주적 기본질서에 위배될
            때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은
            헌법재판소의 심판에 의하여 해산된다. 모든 국민은 법률이 정하는 바에
            의하여 납세의 의무를 진다. 정당의 목적이나 활동이 민주적 기본질서에
            위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은
            헌법재판소의 심판에 의하여 해산된다. 모든 국민은 법률이 정하는 바에
            의하여 납세의 의무를 진다.
          </ProjectContentText>
          <ProjectContentText>
            국회의 회의는 공개한다. 다만, 출석의원 과반수의 찬성이 있거나 의장이
            국가의 안전보장을 위하여 필요하다고 인정할 때에는 공개하지 아니할 수
            있다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의
            사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
            국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여
            우선적으로 근로의 기회를 부여받는다.
          </ProjectContentText>
        </ProjectContentTextBox>
      </ProjectContentMain>
    </div>
  );
}

export default ProjectEntrance;
