import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  border: 1px solid #7c7c7c;
  border-radius: 10px;
  padding: 8px;
  margin: 10px;
  max-height: 280px;
  word-break: break-all;
  text-overflow: "...";
  /* width: 85%; */
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

function MyProject({ project }) {
  const navigate = useNavigate();

  const goToProjctSet = (projectId) => {
    navigate(`/myproject/${projectId}`, { state: projectId });
    window.scrollTo(0, 0);
  };

  return (
    <div className="col-md-4">
      <Container
        onClick={() => {
          goToProjctSet(project.id);
        }}
      >
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
