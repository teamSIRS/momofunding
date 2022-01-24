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
    </div>
  );
};

export default OpenButton;