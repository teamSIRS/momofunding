import styled from "styled-components";
import { MomoWeakColor } from "../../../shared/global";
import { LiveBtnRound } from "./Chat/styles";

export const LiveFooterWrapper = styled.footer`
  display: flex;
  background: linear-gradient(rgba(24, 12, 40, 0%), rgba(24, 12, 40, 60%));
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

  @keyframes blinker {
    from {
      transform: translateX(60px);
    }
    to {
      background: var(--successGradient);
      transform: scale(1.05) translateX(40px);
    }
  }
  &.survey {
    background: var(--secondaryGradient);
    transform: translateX(60px);
  }
  &.survey-blink {
    background: var(--secondaryGradient);
    animation-name: blinker;
    animation-duration: 0.6s;
    animation-delay: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    transform: translateX(60px);
  }
`;

export const ControlBtn = styled(LiveBtnRound)`
  opacity: 0.9;

  &.on {
    background: ${MomoWeakColor};
  }

  &.off {
    background: tomato;
  }
`;

export const VideoWrapper = styled.div`
  background: gold;
  width: 100%;
  height: 100%;
  right: 450px;
  position: absolute;
  display: flex;
  opacity: 0.5;
`;
