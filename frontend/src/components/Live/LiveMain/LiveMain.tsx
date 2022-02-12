import { RendererWrapper } from "../LivePowderRoom/RTCRenderer/styles";
import { LivePowderRoomWrapper } from "../LivePowderRoom/styles";
import Chat from "./Chat";
import Viewers from "./Viewers";
import LiveFooter from "./LiveFooter";
import Survey from "./Surveys";
import { atom, useRecoilState } from "recoil";

const userApi = {
  isStaff: false,
  surveySubmitted: false,
};

const api = {
  viewers: 3274, // numSockets
};

export const sidebarState = atom({
  key: "sidebarState",
  default: true,
});

export const authorizationState = atom({
  key: "authorizationState",
  default: userApi.isStaff,
});

export const submitState = atom({
  key: "submitState",
  default: userApi.surveySubmitted || userApi.isStaff,
});

export const LiveMain = () => {
  const [show, setShow] = useRecoilState(sidebarState);
  return (
    <LivePowderRoomWrapper>
      <RendererWrapper>
        <Chat show={show} />
        <Survey show={!show} />

        <Viewers viewers={api.viewers}></Viewers>
      </RendererWrapper>
      <LiveFooter />
    </LivePowderRoomWrapper>
  );
};
