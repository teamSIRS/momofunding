import { Link } from "react-router-dom";
import { StyledBtn } from "./styles";

const OpenButton = () => {
  return (
    <div>
      <Link to="projects">
        <StyledBtn variant="outline-primary" size="sm">
          프로젝트 열기
        </StyledBtn>
      </Link>
      <Link to="/projects/entrance">
        <StyledBtn variant="outline-primary" size="sm">
          프로젝트 시작 임시버튼
        </StyledBtn>
      </Link>
    </div>
  );
};

export default OpenButton;
