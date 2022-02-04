import { RendererWrapper } from "../LivePowderRoom/RTCRenderer/styles";
import { LivePowderRoomWrapper } from "../LivePowderRoom/styles";
import Chat from "./Chat";
import { ChatIcon, LiveBtnRound, LiveBtnRoundDanger } from "./Chat/styles";
import Viewers from "./Viewers";
import { chatboxEllipsesOutline, exitOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

export const LiveMain = () => {
  const api = {
    viewers: 32674, // numSockets
  };
  return (
    <LivePowderRoomWrapper>
      <RendererWrapper>
        <Viewers viewers={api.viewers}></Viewers>
        <Chat />
        <LiveBtnRound>
          <ChatIcon icon={chatboxEllipsesOutline} />
        </LiveBtnRound>
        <Link to="/">
          <LiveBtnRoundDanger>
            <ChatIcon icon={exitOutline} />
          </LiveBtnRoundDanger>
        </Link>
      </RendererWrapper>
    </LivePowderRoomWrapper>
  );
};
