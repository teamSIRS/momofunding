import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { MomoColor } from "../../../../shared/global";

type MomoProgbarProps = {
  width?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

export const MomoProgress = styled(ProgressBar)<MomoProgbarProps>`
  position: absolute;
  width: ${({ width = null }) => width};
  top: ${({ top = null }) => top};
  bottom: ${({ bottom = null }) => bottom};
  left: ${({ left = null }) => left};
  right: ${({ right = null }) => right};
  background-color: transparent;
  .progress-bar {
    background-color: ${MomoColor};
  }
`;
