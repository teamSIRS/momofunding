import { RendererWrapper } from "../LivePowderRoom/RTCRenderer/styles";
import { LivePowderRoomWrapper } from "../LivePowderRoom/styles";
import Chat from "./Chat";
import Viewers from "./Viewers";
import LiveFooter from "./LiveFooter";
import Survey from "./Surveys";
import { atom, useRecoilState } from "recoil";

const userApi = {
  isStaff: true,
  surveySubmitted: false,
};

const api = {
  viewers: 32674, // numSockets
};

export const sidebarState = atom({
  key: "sidebarState",
  default: true,
});

export const authorizationState = atom({
  key: "authorizationState",
  default: userApi.isStaff,
});

export const camState = atom({
  key: "camState",
  default: false,
});

export const micState = atom({
  key: "micState",
  default: false,
});

export const audioState = atom({
  key: "audioState",
  default: true,
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
        <Viewers viewers={api.viewers}></Viewers>
        <Chat show={show} />
        <Survey show={!show} />
      </RendererWrapper>
      <LiveFooter />
    </LivePowderRoomWrapper>
  );
};
