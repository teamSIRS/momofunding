import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    border: 1px solid #7C7C7C;
    border-radius: 10px;
    padding: 8px;
    margin: 0px;
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

const ProjectTitle = styled.p`
    font-weight: bold;
    height: 25px;
    margin: 0;
`;

const CreatorName = styled.p`
    margin: 0;
`;

function MyProject({project}){
    const navigate = useNavigate();

    const goToProjctSet = (projectId) =>{
        navigate(`/myproject/${projectId}`, { state: projectId });
        window.scrollTo(0, 0);
      }

    return(
        <div class="col-md-4">
            <Container onClick={() => {goToProjctSet(project.id)}}>
                <ProjectPic src={project.subImageUrl}/>
                <Bar/>
                <ProjectTitle>
                    { String(project.projectName).length > 14 
                        ? `${String(project.projectName).slice(0, 14)}...`
                        : String(project.projectName)
                    }
                </ProjectTitle>
                <CreatorName>{project.creatorName}</CreatorName>
            </Container>
        </div>
    );
}

export default MyProject;