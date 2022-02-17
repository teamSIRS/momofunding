// 프로젝트 리스트안에 하나의 카드(소세지 그림 + 설명)
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import { Container, Thumnail } from "./Project.styled";
import LiveBadge from "../Home/Badge";
import { useNavigate } from "react-router-dom";
import { comma } from "../../atoms";

const LiveOn = styled.div`
  color: white;
  background-color: red;
  font-size: 16px;
  font-weight: bold;
  width: 48px;
  height: 22px;
  position: absolute;
  text-align: center;
  line-height: 22px;
  border-radius: 7px;
  right: 20px;
  top: 8px;
`;

const TitleDetail = styled.div`
  display: flex;
  flex-direction: column;
  height: 55px;
  margin: 10px 0 5px 0;
`;

const ProjectTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
const ProjectCreator = styled.p`
  font-size: 16px;
`;

const FundDetail = styled.div`
  display: inline-block;
  margin: 5px;
  span {
    font-size: 15px;
  }
  span#percentage {
    float: left;
  }
`;

const Leftday = styled.span`
  float: right;
  color: ${(props) => props.color};
`;

function ProjectCard({ project }) {
  let today = new Date();
  let dday = project.expirationDate; //받아온 값
  let cdday = Date.parse(dday);
  let gap = cdday - today.getTime();
  let result = Math.ceil(gap / (1000 * 60 * 60 * 24));

  const navigate = useNavigate();

  const goToProjct = (projectId) => {
    navigate(`/projects/${projectId}`, { state: projectId });
    window.scrollTo(0, 0);
  };

  return (
    <div className="col-md-4">
      <Container
        onClick={() => {
          goToProjct(project.id);
        }}
        key={project.id}
      >
        <div
          className="position-absolute top-0 end-0"
          style={{ marginRight: 0, marginTop: 15 }}
        >
          {project.isLivePlaying ? (
            <LiveBadge content={"Live"} color={"red"} />
          ) : null}
        </div>
        <Thumnail src={project.subImageUrl} />
        <TitleDetail>
          <ProjectTitle>
            {String(project.projectName).length > 25
              ? `${String(project.projectName).slice(0, 25)}...`
              : String(project.projectName)}
          </ProjectTitle>
          <ProjectCreator>{project.creatorName}</ProjectCreator>
        </TitleDetail>
        <ProgressBar
          variant="warning"
          now={project.popularity}
          style={{ height: 7 }}
        />
        <FundDetail>
          <span id="percentage">
            {comma(project.popularity)}% · {comma(project.currentAmount)}원
          </span>
          {result < 5 ? (
            <Leftday color="red">{result}일 남음</Leftday>
          ) : (
            <Leftday color="black">{result}일 남음</Leftday>
          )}
        </FundDetail>
      </Container>
    </div>
  );
}

export default ProjectCard;
