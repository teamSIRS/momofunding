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
  pjtIdState,
  sessionState,
  titleState,
} from "../../LiveAtoms";
import {
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { baseUrl } from "../../../../App";
import LiveMain from "../../LiveMain";
import setAuthorizationToken, { userIdState } from "../../../../atoms";
import { SelectedSurveyState } from "../../LiveMain/Surveys/SurveyList/SurveyList";
import { useParams } from "react-router-dom";
import { authorizationState, surveySubmitState } from "../../LiveMain/LiveMain";

const OPENVIDU_SERVER_URL = "https://i6a202.p.ssafy.io:4431";
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

const sessionType = {
  on: () => {},
};

const pubType = {
  publishVideo: () => true,
  publishAudio: () => true,
};

const msgType = {
  nickname: "",
  message: "",
};

export const RTCRenderer = () => {
  const [isStaff, setIsStaff] = useRecoilState(authorizationState);
  // const [isCreated, setIsCreated] = useState(false);
  const [camActive, setCamActive] = useRecoilState(camState);
  const [micActive, setMicActive] = useRecoilState(micState);
  const [publisher, setPublisher] = useState(pubType);
  const [message, setMessage] = useState(msgType);
  const setSession = useSetRecoilState(sessionState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [title, setTitle] = useRecoilState(titleState);
  const [curSurvey, setCurSurvey] = useRecoilState(SelectedSurveyState);
  const [content, setContent] = useState("");
  const [messages, setMessages] = useRecoilState(msgsState);
  const [sessionIdToServer, setSessionId] = useState("");
  const [pjtId, _] = useRecoilState(pjtIdState);
  const setSurveySubmit = useSetRecoilState(surveySubmitState);
  const [liveId, setLiveID] = useState("default");
  let session = sessionType;
  let isCreated = false;
  let sessionId;

  const userSideSessionId = useParams().id;
  const staffSideSessionId = useRecoilValue(sessionIdSelector);

  const onCamClick = () => {
    setCamActive((now) => !now);
    console.log(camActive);
  };

  const toggleCam = () => {
    publisher.publishVideo(camActive);
  };

  const toggleMic = () => {
    publisher.publishAudio(micActive);
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
          setSurveySubmit(true);
          resolve(response.data.id);
        })
        .catch((response) => {
          console.log(response);
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            console.log(409, "handled");
            isCreated = true;
            setIsStaff(false);
            setIsSubmitted(true);
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
      console.log("stream started");
      session.subscribe(event.stream, "creatorVideo");
    });

    session.on("signal:momo-chat", (event) => {
      console.log(event.data, "수신 성공");
      console.log("curMsgs:", messages);
      const data = JSON.parse(event.data);
      console.log("tobeMsgs:", [...messages, data]);
      setMessage(data);
    });

    session.on("signal:survey-id", (event) => {
      console.log("received this:", event.data);
      setCurSurvey(Number(event.data));
    });

    getToken(sessionId).then((token) => {
      session
        .connect(token)
        .then(() => {
          if (!isCreated) {
            console.log("publishing...");
            const host = OV.initPublisher("creatorVideo", {
              resolution: "1280x720",
              publishVideo: camActive,
              publishAudio: micActive,
            });
            setPublisher(host);
            session.publish(host);
          }
          setSession(session);
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
    console.log("isStaff changed to:", isStaff);
    console.log("isCreated:", isCreated);
  }, [isStaff]);

  // 컴포넌트 생성시
  useEffect(() => {
    sessionId = userSideSessionId;
    if (userSideSessionId === "new") {
      sessionId = staffSideSessionId;
    } else {
      console.log("나는 참여자~~~");
      setIsSubmitted(true);
      setIsStaff(false);
    }

    setSessionId(sessionId);
    console.log("session id: ", sessionId);
    setTimeout(() => {
      console.log("시작 : " + isStaff);
      joinSession();
    }, 2000);

    return () => {
      leaveSession();
    };
  }, []);

  // toggle 관련
  useEffect(() => {
    toggleCam();
  }, [camActive]);
  useEffect(() => {
    toggleMic();
  }, [micActive]);

  // chat 메시지 관련
  useEffect(() => {
    if (message.message) {
      console.log(message, " updated!");
      setMessages([...messages, message]);
    }
  }, [message]);

  // survey 관련
  useEffect(() => {
    console.log("curSurvey changed to:", curSurvey);
  }, [curSurvey]);

  useEffect(() => {
    console.log("LIVE ID", liveId);
    if (userSideSessionId === "new") {
      return () => putEndLiveToServer();
    }
  }, [liveId]);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  const putEndLiveToServer = () => {
    axios({
      url: `/lives/${liveId}/endLive`,
      method: "put",
      baseURL: `${baseUrl}`,
      headers: setAuthorizationToken(),
    })
      .then((response) => {
        console.log("end request successfully done.");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let category;
    await axios({
      url: `/projects/${pjtId}`,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        category = response.data.projectCategoryId;
      })
      .catch((err) => {
        console.log(err);
      });

    const data = {
      title: title,
      content: content,
      projectId: pjtId,
      projectCategoryId: category,
      sessionId: sessionIdToServer,
    };
    console.log("data sending:", data);

    await axios({
      url: `/lives`,
      method: "post",
      baseURL: `${baseUrl}`,
      headers: setAuthorizationToken(),
      data: data,
    })
      .then((response) => {
        console.log(response.data);
        setLiveID(response.data.liveId);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitted(true); // tmp: 백에서 404를 리턴해서 임시로 해결했습니다.
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
            <DashboardHeader>라이브 만들기</DashboardHeader>
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
              {camActive ? (
                <WeakSwitch onClick={onCamClick}>
                  <ButtonIconActive icon={videocamOutline}></ButtonIconActive>
                </WeakSwitch>
              ) : (
                <Switch onClick={onCamClick}>
                  <ButtonIconInactive
                    icon={videocamOffOutline}
                  ></ButtonIconInactive>
                </Switch>
              )}
              {micActive ? (
                <WeakSwitch onClick={onMicClick}>
                  <ButtonIconActive icon={micOutline}></ButtonIconActive>
                </WeakSwitch>
              ) : (
                <Switch onClick={onMicClick}>
                  <ButtonIconInactive icon={micOffOutline}></ButtonIconInactive>
                </Switch>
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
