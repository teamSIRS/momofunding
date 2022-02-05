import { RendererWrapper } from "../LivePowderRoom/RTCRenderer/styles";
import { LivePowderRoomWrapper } from "../LivePowderRoom/styles";
import Chat from "./Chat";
import { ChatIcon, LiveBtnRoundDanger } from "./Chat/styles";
import Viewers from "./Viewers";
import {
  chatboxEllipsesOutline,
  exitOutline,
  newspaperOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { MouseEventHandler, useState } from "react";
import { LiveToggle, LiveController, LiveFooter, ToggleBtn } from "./styles";

export const LiveMain = () => {
  const [show, setShow] = useState(true);
  const [cam, setCam] = useState(false);
  const [mic, setMic] = useState(false);

  const api = {
    viewers: 32674, // numSockets
  };

  const onClick: MouseEventHandler<HTMLDivElement> = () => {
    setShow((now: boolean) => !now);
  };

  return (
    <LivePowderRoomWrapper>
      <RendererWrapper>
        <Viewers viewers={api.viewers}></Viewers>
        <Chat show={show} />
        <LiveFooter>
          <LiveController>
            <Link to="/">
              <LiveBtnRoundDanger>
                <ChatIcon icon={exitOutline} />
              </LiveBtnRoundDanger>
              <LiveBtnRoundDanger>
                <ChatIcon icon={exitOutline} />
              </LiveBtnRoundDanger>
            </Link>
          </LiveController>
          <LiveToggle className={show ? "" : "survey"} onClick={onClick}>
            <ToggleBtn className={show ? "" : "survey"}>
              <ChatIcon
                icon={show ? newspaperOutline : chatboxEllipsesOutline}
                className={show ? "" : "survey"}
              />
            </ToggleBtn>
          </LiveToggle>
        </LiveFooter>
      </RendererWrapper>
    </LivePowderRoomWrapper>
  );
};
