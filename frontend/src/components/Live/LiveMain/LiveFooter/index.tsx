import { Link } from "react-router-dom";
import { ChatIcon, LiveBtnRoundDanger } from "../Chat/styles";
import {
  exitOutline,
  newspaperOutline,
  chatboxEllipsesOutline,
  videocamOutline,
  micOutline,
  videocamOffOutline,
  micOffOutline,
  volumeHighOutline,
  volumeMuteOutline,
} from "ionicons/icons";
import {
  ControlBtn,
  LiveController,
  LiveFooterWrapper,
  LiveToggle,
  ToggleBtn,
} from "../styles";
import { useRecoilState } from "recoil";
import {
  authorizationState,
  sidebarState,
  surveySubmitState,
} from "../LiveMain";
import { MouseEventHandler } from "react";
import { audioState, camState, micState } from "../../LiveAtoms";

const LiveFooter = () => {
  const [show, setShow] = useRecoilState(sidebarState);
  const [isCreator, _] = useRecoilState(authorizationState);
  const [camOn, setCam] = useRecoilState(camState);
  const [micOn, setMic] = useRecoilState(micState);
  const [audioOn, setAudio] = useRecoilState(audioState);
  const [surveyState, __] = useRecoilState(surveySubmitState);

  const onClick: MouseEventHandler<HTMLDivElement> = () => {
    setShow((now: boolean) => !now);
  };

  const onCamClick: MouseEventHandler<HTMLDivElement> = () => {
    setCam((now: boolean) => !now);
  };

  const onMicClick: MouseEventHandler<HTMLDivElement> = () => {
    setMic((now: boolean) => !now);
  };

  const onAudioClick: MouseEventHandler<HTMLDivElement> = () => {
    setAudio((now: boolean) => !now);
  };

  const surveyDone = () => {
    if (!surveyState) {
      return "survey-blink";
    }
    return "survey";
  };

  return (
    <LiveFooterWrapper>
      <LiveController>
        {isCreator ? (
          <>
            <ControlBtn onClick={onCamClick} className={camOn ? "on" : "off"}>
              {camOn ? (
                <ChatIcon icon={videocamOutline} className="survey" />
              ) : (
                <ChatIcon icon={videocamOffOutline} />
              )}
            </ControlBtn>
            <ControlBtn onClick={onMicClick} className={micOn ? "on" : "off"}>
              {micOn ? (
                <ChatIcon icon={micOutline} className="survey" />
              ) : (
                <ChatIcon icon={micOffOutline} />
              )}
            </ControlBtn>
          </>
        ) : (
          <>
            <Link to="/">
              <LiveBtnRoundDanger>
                <ChatIcon icon={exitOutline} />
              </LiveBtnRoundDanger>
            </Link>
            <ControlBtn
              onClick={onAudioClick}
              className={audioOn ? "on" : "off"}
            >
              {audioOn ? (
                <ChatIcon icon={volumeHighOutline} className="survey" />
              ) : (
                <ChatIcon icon={volumeMuteOutline} />
              )}
            </ControlBtn>
          </>
        )}
      </LiveController>
      <LiveToggle className={show ? "" : "survey"} onClick={onClick}>
        <ToggleBtn className={show ? "" : surveyDone()}>
          <ChatIcon
            icon={show ? newspaperOutline : chatboxEllipsesOutline}
            className={show ? "" : "survey"}
          />
        </ToggleBtn>
      </LiveToggle>
    </LiveFooterWrapper>
  );
};

export default LiveFooter;
