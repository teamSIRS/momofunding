import { findByLabelText } from "@testing-library/react";
import styled from "styled-components";
import { LiveBtnRound } from "./Chat/styles";

export const LiveFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
`;

export const LiveController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LiveToggle = styled.div`
  position: absolute;
  height: 60px;
  width: 130px;
  border-radius: 30px;
  background: white;
  right: 15px;
  display: flex;
  align-items: center;
  background: var(--secondaryGradient);
  cursor: pointer;

  &.survey {
    background: var(--primaryGradient);
  }
`;

export const ToggleBtn = styled(LiveBtnRound)`
  position: absolute;
  left: 0px;

  &.survey {
    background: var(--secondaryGradient);
    transform: translateX(60px);
  }
`;
