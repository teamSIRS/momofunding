import { Button } from "react-bootstrap";
import styled from "styled-components";
import { GlobalColor } from "../../../shared/global";

export const StyledBtn = styled(Button)`
  margin: 10px;
  color: white;
  border-color: white;
  &:hover {
    ${GlobalColor};
    background-color: #dddded;
  }
`;
