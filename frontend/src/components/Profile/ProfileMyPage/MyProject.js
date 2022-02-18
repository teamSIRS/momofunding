import styled from "styled-components";
import { useMatch, useNavigate } from "react-router-dom";
import { StyledSpan } from "../../Home/Badge/styles";

const Container = styled.div`
  position: relative;
  border: 1px solid #7c7c7c;
  border-radius: 10px;
  padding: 8px;
  margin: 10px;
  max-height: 280px;
  word-break: break-all;
  text-overflow: "...";
`;

const ProjectPic = styled.img`
  width: 100%;
  height: 200px;
  object-position: center;
  object-fit: cover;
`;

const Bar = styled.hr`
  margin: 10px 0 5px 0;
`;

const ProjectTitle = styled.div`
  font-weight: bold;
  max-height: 30px;
  overflow: hidden;
  margin: 0;
`;

const CreatorName = styled.div`
  max-height: 30px;
  overflow: hidden;
  margin: 0;
`;
const Test = styled.div`
  height: 60px;
`;

const MyProjectStyledSpan = styled(StyledSpan)`
  display: block;
  position: absolute;
  margin: 30px;
  z-index: 2;
`;

function MyProject({ project }) {
  const navigate = useNavigate();
  const projectMatch = useMatch("/users/myprojects");

  const goToProjctSet = (projectId) => {
    if (projectMatch) {
      navigate(`/myproject/${projectId}`, { state: projectId });
      window.scrollTo(0, 0);
    } else {
      navigate(`/projects/${projectId}`);
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className="col-md-4">
      {project.projectStateId === 1 ? (
        <MyProjectStyledSpan color={"red"}>작성 중</MyProjectStyledSpan>
      ) : (
        <div>
          {project.projectStateId === 2 ? (
            <MyProjectStyledSpan color={"green"}>진행 중</MyProjectStyledSpan>
          ) : (
            <div>
              {project.projectStateId === 3 ? (
                <MyProjectStyledSpan color={"black"}>종료</MyProjectStyledSpan>
              ) : null}
            </div>
          )}
        </div>
      )}
      <Container
        onClick={() => {
          goToProjctSet(project.id);
        }}
      >
        <div
          className="position-absolute top-0 end-0"
          style={{ marginRight: 0, marginTop: 15 }}
        ></div>
        <ProjectPic src={project.subImageUrl} />
        <Bar />
        <Test>
          <ProjectTitle>
            {String(project.projectName)
              ? `${String(project.projectName)}`
              : String(project.projectName)}
          </ProjectTitle>
          <CreatorName>{project.creatorName}</CreatorName>
        </Test>
      </Container>
    </div>
  );
}

export default MyProject;
