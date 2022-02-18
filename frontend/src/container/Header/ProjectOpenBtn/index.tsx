import { Link } from "react-router-dom";
import { StyledBtn } from "./styles";

const OpenButton = () => {
  return (
    <div>
      <Link to="/projects/entrance">
        <StyledBtn variant="outline-primary" size="md">
          프로젝트 만들기
        </StyledBtn>
      </Link>
    </div>
  );
};

export default OpenButton;
