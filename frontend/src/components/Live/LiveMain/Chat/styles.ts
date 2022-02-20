import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  MomoColor,
  MomoStrongColor,
  MomoWeakColor,
} from "../../../../shared/global";
import { TextAreaWrapper } from "../../../ProjectDetail/ProjectContent/ProjectCommunity/PjCommunityQnA/PjCommunityInput/styles";
import { Switch } from "../../LivePowderRoom/RTCRenderer/styles";

export const ChatWrapper = styled.div`
  margin: 15px;
  margin-right: 40px;
  margin-top: 40px;
  width: 375px;
  color: #ffffffce;
  height: 86%;
  right: 0px;
  bottom: 75px;
  position: absolute;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  transition: 0.6s ease-in-out;

  &.hide {
    opacity: 0;
    transform: translateX(700px);
  }
`;

export const ChatBody = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  background: transparent;
  color: #ffffffce;
  position: relative;
  border-radius: 6px;
  padding: 5px 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  background: rgba(212, 212, 212, 10%);
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatHeader = styled.header`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  position: sticky;
  background: var(--primaryGradient);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
export const ChatFooter = styled.form`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  font-size: 20px;
  position: sticky;
  background: var(--primaryGradient);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const ChatIcon = styled(IonIcon)`
  font-size: 30px;
  margin: 3px;
  color: ${MomoWeakColor};
  &.survey {
    color: ${MomoStrongColor};
  }
`;

export const MessageBox = styled.div`
  align-self: flex-end;
  padding: 6px 18px;
  border-radius: 24px;
  border-bottom-right-radius: 0px;
  background: var(--primary);
  font-size: 15px;
  font-weight: 400;
  margin: 7px;
  max-width: 65%;
  box-shadow: var(--secondaryBoxShadow);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NickName = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: ${MomoWeakColor};
`;

export const ChatTypingArea = styled(TextAreaWrapper)`
  border-radius: 5px;
  padding: 3px 10px;
  height: 36px;
  background: var(--transparentLightGradient);
  margin: 3px;
  margin-right: 20px;
`;

export const ChatButton = styled(Switch)`
  border: none;
  background: none;
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;

export const LiveBtnRound = styled(Switch)`
  background: var(--primaryGradient);
  display: flex;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  box-shadow: var(--secondaryBoxShadow);
`;

export const LiveBtnRoundDanger = styled(LiveBtnRound)`
  background: tomato;
`;

export const ImageForBg = styled.img`
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  height: 100%;
  margin: auto;
`;

export const ProjectBtn = styled(ChatButton)`
  overflow: hidden;
  position: relative;
  width: 60px;
  height: 60px;
`;

export const ChatTop = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 3px;
`;

export const ProjectLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  padding: 8px;
  background: ${MomoColor};
  margin: 3px 8px;
  box-shadow: var(--secondaryBoxShadow);
  :hover {
    background: ${MomoStrongColor};
  }
`;

export const ProjectGo = styled.span`
  width: 100%;
  height: 30px;
  text-align: center;
  display: inline-block;
  white-space: nowrap;

  @keyframes scroll-left {
    0% {
      -webkit-transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
    }
  }

  &.title {
    animation: scroll-left 9s linear infinite;
  }
`;

export const LiveBtnRoundDangerSmall = styled(LiveBtnRoundDanger)`
  background: tomato;
  width: 30px;
  height: 30px;
  margin: 0;
`;

export const ProjectClose = styled(ProjectLink)`
  font-size: 16px;
  background: ${MomoWeakColor};
  align-self: flex-end;
  color: ${MomoStrongColor};
  :hover {
    background: tomato;
    ${LiveBtnRoundDangerSmall} {
      background: pink;
    }
  }
`;

export const ProjectDesc = styled.div`
  width: 55%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
