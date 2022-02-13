import {
  ButtonIconActive,
  Dashboard,
  DashboardContent,
  DashBoardFooter,
  DashboardHeader,
  DashboardInput,
  DashBoardInputBox,
  DashBoardTextArea,
  Switch,
  RendererWrapper,
  WeakSwitch,
  ButtonIconInactive,
  TestVideoWrapper,
  SubmitBtn,
} from "./styles";
import {
  videocamOutline,
  micOutline,
  videocamOffOutline,
  micOffOutline,
} from "ionicons/icons";
import ImageUploader from "../../../ImageUploader/ImageUploader";
import { OpenVidu } from "openvidu-browser";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  camState,
  micState,
  msgsState,
  msgState,
  sessionState,
  titleState,
} from "../../LiveAtoms";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { baseUrl } from "../../../../App";
import LiveMain from "../../LiveMain";
import { userIdState } from "../../../../atoms";
import { SignalEvent } from "openvidu-browser";

const OPENVIDU_SERVER_URL = "https://i6a202.p.ssafy.io";
const OPENVIDU_SERVER_SECRET = "9793";

function randomString() {
  return Math.random().toString(36).slice(2);
}

const sessionIdSelector = selector({
  key: "sessionId",
  get: ({ get }) => {
    const id = get(userIdState);
    return randomString(id);
  },
});

export const RTCRenderer = () => {
  const [camActive, setCamActive] = useRecoilState(camState);
  const [micActive, setMicActive] = useRecoilState(micState);
  const [publisher, setPublisher] = useState(undefined);
  const [recoilSession, setSession] = useRecoilState(sessionState);
  const [isCreated, setIsCreated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [title, setTitle] = useRecoilState(titleState);
  const [content, setContent] = useState("");
  const [message, setMessage] = useRecoilState(msgState);
  const [messages, setMessages] = useRecoilState(msgsState);

  let session = undefined;
  const sessionId = useRecoilValue(sessionIdSelector);

  const onCamClick = () => {
    setCamActive((now) => !now);
    publisher.publishVideo(camActive);
    console.log(camActive);
  };

  const onMicClick = () => {
    setMicActive((now) => !now);
    publisher.publishAudio(micActive);
  };

  const createSession = (sessionId) => {
    console.log("create session. id:", sessionId);
    return new Promise((resolve, reject) => {
      var data = JSON.stringify({ customSessionId: sessionId });
      console.log("promise");
      axios
        .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions", data, {
          headers: {
            Authorization:
              "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("CREATE SESION", response);
          resolve(response.data.id);
        })
        .catch((response) => {
          console.log(response);
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            console.log(409, "handled");
            setIsCreated(true);
            resolve(sessionId);
          } else {
            console.log(error);
            console.warn(
              "No connection to OpenVidu Server. This may be a certificate error at " +
                OPENVIDU_SERVER_URL
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                  OPENVIDU_SERVER_URL +
                  '"\n\nClick OK to navigate and accept it. ' +
                  'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                  OPENVIDU_SERVER_URL +
                  '"'
              )
            ) {
              window.location.assign(
                OPENVIDU_SERVER_URL + "/accept-certificate"
              );
            }
          }
        });
    });
  };

  const createToken = (sessionId) => {
    const jsonBody = {};
    console.log("createtoken");
    return new Promise((resolve, reject) => {
      var data = {};
      axios
        .post(
          OPENVIDU_SERVER_URL +
            "/openvidu/api/sessions/" +
            sessionId +
            "/connection",
          JSON.stringify(jsonBody),
          {
            headers: {
              Authorization:
                "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("TOKEN", response);
          resolve(response.data.token);
        })
        .catch((error) => reject(error));
    });
  };

  const getToken = (mySessionId) => {
    return createSession(mySessionId).then((sessionId) =>
      createToken(sessionId)
    );
  };

  const joinSession = () => {
    const OV = new OpenVidu();
    session = OV.initSession();

    session.on("streamCreated", function (event) {
      const subscriber = session.subscribe(event.stream, "creatorVideo");
    });

    session.on("signal:pleaseAlert", (event) => {
      alert("recoilSession 테스트 성공.");
    });

    session.on("signal:momo-chat", (event) => {
      console.log(event.data, "수신 성공");
      // setMessages([...messages, event.data]);
    });

    getToken(sessionId).then((token) => {
      session
        .connect(token)
        .then(() => {
          if (!isCreated) {
            console.log("publishing...");
            const host = OV.initPublisher("creatorVideo", {
              resolution: "1280x720",
              publishVideo: !camActive,
              publishAudio: micActive,
            });
            setPublisher(host);
            session.publish(host);
            setSession(session);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const leaveSession = () => {
    console.log("leaving live session", session, publisher);
    session.disconnect();
  };

  useEffect(() => {
    joinSession();
    // console.log(session);
    // setSession(session);
    console.log("session id: ", sessionId);
    return () => leaveSession();
  }, []);

  const onTitleChange = (event) => {
    console.log(event);
    setTitle(event.target.value);
  };

  const onContentChange = (event) => {
    console.log(event);
    setContent(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `/lives`,
      method: "post",
      baseURL: `${baseUrl}`,
      data: {
        title: title,
        content: content,
        projectId: 1,
        projectCategoryId: 1,
        sessionId: sessionId,
      },
    })
      .then((response) => {
        console.log(response.data);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitted(true); // tmp: 백에서 404를 리턴해서 임시로 해결했습니다.
      });
  };

  const sendSignalSessionRecoil = (event) => {
    recoilSession.signal({
      data: "Test!!!", // Any string (optional)
      to: [], // Array of Connection objects (optional. Broadcast to everyone if empty)
      type: "pleaseAlert", // The type of message (optional)
    });
  };

  return (
    <RendererWrapper>
      <TestVideoWrapper
        className={!isSubmitted ? "powderRoom" : "main"}
        id="creatorVideo"
      ></TestVideoWrapper>
      {!isSubmitted ? (
        <>
          <Dashboard id="live-init-form" onSubmit={onSubmit}>
            <DashboardHeader onClick={sendSignalSessionRecoil}>
              라이브 만들기
            </DashboardHeader>
            <DashboardContent>
              <DashBoardInputBox>
                <label>라이브 제목 (필수)</label>
                <DashboardInput
                  id="session-title"
                  required
                  value={title}
                  placeholder="라이브 제목을 알려주세요"
                  onChange={onTitleChange}
                ></DashboardInput>
              </DashBoardInputBox>
              <DashBoardInputBox height="150px">
                <label>설명</label>
                <DashBoardTextArea
                  id="desc"
                  value={content}
                  onChange={onContentChange}
                  placeholder="시청자에게 라이브에 대해 설명해주세요"
                ></DashBoardTextArea>
              </DashBoardInputBox>
              <h5>썸네일 이미지 등록</h5>
              <ImageUploader />
            </DashboardContent>
            <DashBoardFooter>
              {!camActive ? (
                <Switch onClick={onCamClick}>
                  <ButtonIconActive icon={videocamOutline}></ButtonIconActive>
                </Switch>
              ) : (
                <WeakSwitch onClick={onCamClick}>
                  <ButtonIconInactive
                    icon={videocamOffOutline}
                  ></ButtonIconInactive>
                </WeakSwitch>
              )}
              {!micActive ? (
                <Switch onClick={onMicClick}>
                  <ButtonIconActive icon={micOutline}></ButtonIconActive>
                </Switch>
              ) : (
                <WeakSwitch onClick={onMicClick}>
                  <ButtonIconInactive icon={micOffOutline}></ButtonIconInactive>
                </WeakSwitch>
              )}
              <SubmitBtn onClick={leaveSession}>나가기</SubmitBtn>
              <SubmitBtn onClick={onSubmit} type="submit">
                라이브 열기
              </SubmitBtn>
            </DashBoardFooter>
          </Dashboard>
        </>
      ) : (
        <LiveMain />
      )}
    </RendererWrapper>
  );
};
