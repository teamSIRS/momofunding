import { Button } from "react-bootstrap";
import styled from "styled-components";
import { MomoColor, MomoWeakColor } from "../../../shared/global";

export const StyledBtn = styled(Button)`
  margin: 10px;
  color: white;
  border-color: white;
  &:hover {
    color: ${MomoColor};
    border-color: ${MomoColor};
    background-color: ${MomoWeakColor};
  }
`;
