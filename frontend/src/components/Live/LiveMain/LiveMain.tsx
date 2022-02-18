import Chat from "./Chat";
import Viewers from "./Viewers";
import LiveFooter from "./LiveFooter";
import Survey from "./Surveys";
import { atom, useRecoilState } from "recoil";
import { viewrsCntState } from "../LiveAtoms";
import { useEffect } from "react";

const userApi = {
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
  default: true,
});

export const surveySubmitState = atom({
  key: "submitState",
  default: false,
});

export const LiveMain = () => {
  const [show, setShow] = useRecoilState(sidebarState);
  const [viewrsCnt, _] = useRecoilState(viewrsCntState);

  return (
    <>
      {/* <VideoWrapper id="creatorVideo"></VideoWrapper> */}
      <Chat show={show} />
      <Survey show={!show} />

      <Viewers viewers={viewrsCnt}></Viewers>

      <LiveFooter />
    </>
  );
};
