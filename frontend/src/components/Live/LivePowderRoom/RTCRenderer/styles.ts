import { IonIcon } from "@ionic/react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { MomoStrongColor, MomoWeakColor } from "../../../../shared/global";
import { TextArea } from "../../../ProjectDetail/ProjectContent/ProjectCommunity/PjCommunityQnA/PjCommunityInput/styles";

export const RendererWrapper = styled.div`
  background: #151521;
  height: 100%;
  width: 100vw;
  margin: 0;
  overflow: hidden;
  color: whitesmoke;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Dashboard = styled.form`
  background-color: rgba(69, 69, 117, 65%);
  left: 20%;
  top: 15%;
  width: 60%;
  min-height: 100px;
  max-height: 70%;
  border-radius: 6px;
  position: absolute;
  color: rgba(221, 222, 237, 40%);
  overflow-y: scroll;
`;

export const DashboardHeader = styled.header`
  display: flex;
  color: white;
  padding-left: 16px;
  min-height: 45px;
  align-items: center;
  height: 5%;
  font-size: 18px;
  border-bottom: 1px solid rgba(221, 222, 237, 30%);
  margin-bottom: 10px;
`;

export const DashboardContent = styled.article`
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const DashboardInput = styled.input`
  width: 100%;
  resize: none;
  outline: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  line-height: 24px;
  height: 24px;
  padding: 15px;
`;

export const DashBoardInputBox = styled.div<{ height?: string }>`
  display: flex;
  flex-direction: column;
  background: transparent;
  border: 1px solid rgba(221, 222, 237, 30%);
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  padding: 3px 5px;
  font-size: 14px;
  height: ${(props) => props.height};
`;

export const DashBoardTextArea = styled(TextArea)`
  width: 100%;
  resize: none;
  outline: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  line-height: 24px;
  height: 100%;
  padding: 12px;
`;

export const DashBoardFooter = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 8px 8px;
  position: sticky;
  border-top: 1px solid rgba(221, 222, 237, 30%);
  height: 5%;
  bottom: 0px;
`;

export const Switch = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: tomato;
  border-radius: 25px;
  margin: 0px 10px;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  &:hover {
    transform: rotate(1turn);
  }
`;
export const WeakSwitch = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: ${MomoWeakColor};
  border-radius: 25px;
  margin: 0px 10px;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  &:hover {
    transform: rotate(1turn);
  }
`;

export const ButtonIconActive = styled(IonIcon)`
  color: white;
  font-size: 30px;
`;

export const ButtonIconInactive = styled(IonIcon)`
  color: ${MomoStrongColor};
  font-size: 30px;
`;

export const TmpImage = styled.img`
  width: 100%;
  filter: blur(6px);
`;

export const TestVideoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  video {
    width: 100%;
    filter: blur(3px);
  }
`;

export const SubmitBtn = styled(Button)`
  margin-left: 10px;
`;
