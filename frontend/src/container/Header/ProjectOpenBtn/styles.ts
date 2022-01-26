import { Button } from "react-bootstrap";
import styled from "styled-components";
import {
  MomoColor,
  MomoStrongColor,
  MomoWeakColor,
} from "../../../shared/global";

export const StyledBtn = styled(Button)<{
  color?: string;
  hoverColor?: string;
}>`
  margin: 10px;
  color: white;
  background-color: ${MomoStrongColor};
  border-color: white;
  &:hover {
    color: ${MomoColor};
    border-color: ${MomoColor};
    background-color: ${MomoWeakColor};
  }
`;
