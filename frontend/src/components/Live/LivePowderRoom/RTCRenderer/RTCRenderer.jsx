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
import { camState, micState, titleState } from "../../LiveAtoms";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../../App";
import LiveMain from "../../LiveMain";
import { userIdState } from "../../../../atoms";

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
  // const [preSession, setPreSession] = useState(undefined);
  const [isCreated, setIsCreated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [title, setTitle] = useRecoilState(titleState);
  const [content, setContent] = useState("");

  let preSession = undefined;
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

  const joinPreSession = () => {
    const OV = new OpenVidu();
    preSession = OV.initSession();
    // setPreSession(preSession);

    getToken(sessionId).then((token) => {
      preSession
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
            preSession.publish(host);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  const navigate = useNavigate();

  const leaveSession = () => {
    console.log("leaving live session", preSession, publisher);
    preSession.disconnect();
  };

  useEffect(() => {
    joinPreSession();
    console.log(sessionId);
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

  const onSubmit = async () => {
    await axios({
      url: `/lives`,
      method: "post",
      baseURL: `${baseUrl}`,
      data: {
        title,
        content,
        projectId: 0,
        sessionId,
      },
    })
      .then((response) => {
        console.log(response.data);
        setIsSubmitted((now) => !now);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <RendererWrapper>
      {!isSubmitted ? (
        <>
          <TestVideoWrapper id="creatorVideo"></TestVideoWrapper>
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
        <LiveMain></LiveMain>
      )}
    </RendererWrapper>
  );
};

// Running Code

// let videoCnt = 0;

// export class RTCRenderer_ extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mySessionId: "라이브 제목을 입력하세요",
//       mySessionDesc: "라이브 설명을 입력하세요",
//       session: undefined,
//       mainStreamManager: undefined,
//       publisher: undefined,
//       subscribers: [],
//     };

//     this.joinSession = this.joinSession.bind(this);
//     this.leaveSession = this.leaveSession.bind(this);
//     this.switchCamera = this.switchCamera.bind(this);
//     this.handleChangeSessionId = this.handleChangeSessionId.bind(this);
//     this.handleChangeSessionDesc = this.handleChangeSessionDesc.bind(this);
//     this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
//     this.onbeforeunload = this.onbeforeunload.bind(this);
//     this.camCheck = this.camCheck.bind(this);
//   }
//   camCheck() {
//     var devices = this.OV.getDevices();
//     var videoDevices = devices.filter((device) => device.kind === "videoinput");
//     let publisher = this.OV.initPublisher(undefined, {
//       audioSource: undefined, // The source of audio. If undefined default microphone
//       videoSource: videoDevices[0].deviceId, // The source of video. If undefined default webcam
//       publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
//       publishVideo: true, // Whether you want to start publishing with your video enabled or not
//       resolution: "1280x720", // The resolution of your video
//       frameRate: 30, // The frame rate of your video
//       insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
//       mirror: false, // Whether to mirror your local video or not
//     });
//     const target = document.getElementById("test-video");
//     publisher.createVideoElement(target, "APPEND");
//   }

//   componentDidMount() {
//     window.addEventListener("beforeunload", this.onbeforeunload);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("beforeunload", this.onbeforeunload);
//   }

//   onbeforeunload(event) {
//     this.leaveSession();
//   }

//   handleChangeSessionId(e) {
//     this.setState({
//       mySessionId: e.target.value,
//     });
//   }

//   handleChangeSessionDesc(e) {
//     this.setState({
//       mySessionDesc: e.target.value,
//     });
//   }

//   handleMainVideoStream(stream) {
//     if (this.state.mainStreamManager !== stream) {
//       this.setState({
//         mainStreamManager: stream,
//       });
//     }
//   }

//   deleteSubscriber(streamManager) {
//     let subscribers = this.state.subscribers;
//     let index = subscribers.indexOf(streamManager, 0);
//     if (index > -1) {
//       subscribers.splice(index, 1);
//       this.setState({
//         subscribers: subscribers,
//       });
//     }
//   }

//   joinSession() {
//     // --- 1) Get an OpenVidu object ---

//     this.OV = new OpenVidu();

//     // --- 2) Init a session ---

//     this.setState(
//       {
//         session: this.OV.initSession(),
//       },
//       () => {
//         var momoLiveSession = this.state.session;

//         // --- 3) Specify the actions when events take place in the session ---

//         // On every new Stream received...
//         momoLiveSession.on("streamCreated", (event) => {
//           // Subscribe to the Stream to receive it. Second parameter is undefined
//           // so OpenVidu doesn't create an HTML video by its own
//           var subscriber = momoLiveSession.subscribe(event.stream, undefined);
//           var subscribers = this.state.subscribers;
//           subscribers.push(subscriber);

//           // Update the state with the new subscribers
//           this.setState({
//             subscribers: subscribers,
//           });
//         });

//         // On every Stream destroyed...
//         momoLiveSession.on("streamDestroyed", (event) => {
//           // Remove the stream from 'subscribers' array
//           this.deleteSubscriber(event.stream.streamManager);
//         });

//         // On every asynchronous exception...
//         momoLiveSession.on("exception", (exception) => {
//           console.warn(exception);
//         });

//         // --- 4) Connect to the session with a valid user token ---

//         // 'getToken' method is simulating what your server-side should do.
//         // 'token' parameter should be retrieved and returned by your own backend
//         this.getToken().then((token) => {
//           // First param is the token got from OpenVidu Server. Second param can be retrieved by every user on event
//           // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
//           momoLiveSession
//             .connect(token, { clientData: "username" })
//             .then(async () => {
//               var devices = await this.OV.getDevices();
//               var videoDevices = devices.filter(
//                 (device) => device.kind === "videoinput"
//               );

//               // --- 5) Get your own camera stream ---

//               // Init a publisher passing undefined as targetElement (we don't want OpenVidu to insert a video
//               // element: we will manage it on our own) and with the desired properties
//               let publisher = this.OV.initPublisher(undefined, {
//                 audioSource: undefined, // The source of audio. If undefined default microphone
//                 videoSource: videoDevices[0].deviceId, // The source of video. If undefined default webcam
//                 publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
//                 publishVideo: true, // Whether you want to start publishing with your video enabled or not
//                 resolution: "1280x720", // The resolution of your video
//                 frameRate: 30, // The frame rate of your video
//                 insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
//                 mirror: false, // Whether to mirror your local video or not
//               });

//               // --- 6) Publish your stream ---

//               momoLiveSession.publish(publisher);

//               // Set the main video in the page to display our webcam and store our Publisher
//               this.setState({
//                 currentVideoDevice: videoDevices[0],
//                 mainStreamManager: publisher,
//                 publisher: publisher,
//               });
//             })
//             .catch((error) => {
//               console.log(
//                 "There was an error connecting to the session:",
//                 error.code,
//                 error.message
//               );
//             });
//         });
//       }
//     );
//   }

//   leaveSession() {
//     // --- 7) Leave the session by calling 'disconnect' method over the Session object ---

//     const mySession = this.state.session;

//     if (mySession) {
//       mySession.disconnect();
//     }

//     // Empty all properties...
//     this.OV = null;
//     this.setState({
//       session: undefined,
//       subscribers: [],
//       mySessionId: "라이브 제목을 입력하세요",
//       mySessionDesc: "라이브 설명을 입력하세요",
//       mainStreamManager: undefined,
//       publisher: undefined,
//     });
//   }
//   async switchCamera() {
//     try {
//       videoCnt += 1;
//       console.log(videoCnt);
//       const devices = await this.OV.getDevices();
//       console.log(devices);
//       var videoDevices = devices.filter(
//         (device) => device.kind === "videoinput"
//       );

//       if (videoDevices && videoDevices.length > 1) {
//         var newVideoDevice = videoDevices.filter(
//           (device) => device.deviceId !== this.state.currentVideoDevice.deviceId
//         );

//         if (newVideoDevice.length > 0) {
//           // Creating a new publisher with specific videoSource
//           // In mobile devices the default and first camera is the front one
//           console.log(newVideoDevice);
//           var newPublisher = this.OV.initPublisher(undefined, {
//             videoSource:
//               newVideoDevice[videoCnt % newVideoDevice.length].deviceId,
//             publishAudio: true,
//             publishVideo: true,
//             resolution: "1280x720", // The resolution of your video
//             mirror: false,
//           });

//           //newPublisher.once("accessAllowed", () => {
//           await this.state.session.unpublish(this.state.mainStreamManager);

//           await this.state.session.publish(newPublisher);
//           this.setState({
//             currentVideoDevice: newVideoDevice,
//             mainStreamManager: newPublisher,
//             publisher: newPublisher,
//           });
//         }
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   render() {
//     const mySessionId = this.state.mySessionId;
//     const mySessionDesc = this.state.mySessionDesc;

//     return (
//       <RendererWrapper>
//         <TestVideoWrapper id="test-video">
//           <UserVideoComponent streamManager={this.state.mainStreamManager} />
//           <input
//             className="btn btn-large btn-success"
//             type="button"
//             id="buttonSnwitchCamera"
//             onClick={this.switchCamera}
//             value="Switch Camera"
//           />
//         </TestVideoWrapper>
//         {this.state.session === undefined ? (
//           <Dashboard
//             id="join"
//             className="form-group"
//             onSubmit={this.joinSession}
//           >
//             <DashboardHeader>라이브 만들기</DashboardHeader>
//             <DashboardContent>
//               <DashBoardInputBox>
//                 <label>라이브 제목 (필수항목)</label>
//                 <DashboardInput
//                   type="text"
//                   id="sessionId"
//                   value={mySessionId}
//                   onChange={this.handleChangeSessionId}
//                   required
//                 />
//               </DashBoardInputBox>
//               <DashBoardInputBox>
//                 <label> 설명 </label>
//                 <DashboardInput
//                   type="text"
//                   id="sessionDesc"
//                   value={mySessionDesc}
//                   onChange={this.handleChangeSessionDesc}
//                 />
//               </DashBoardInputBox>
//               <h5>썸네일 이미지 등록</h5>
//               <ImageUploader />
//             </DashboardContent>
//             <DashBoardFooter>
//               <Button name="commit" type="submit" value="JOIN">
//                 라이브 열기
//               </Button>
//             </DashBoardFooter>
//           </Dashboard>
//         ) : null}

//         {this.state.session !== undefined ? (
//           <div id="session">
//             <div id="session-header">
//               <h1 id="session-title">{mySessionId}</h1>
//               <input
//                 className="btn btn-large btn-danger"
//                 type="button"
//                 id="buttonLeaveSession"
//                 onClick={this.leaveSession}
//                 value="Leave session"
//               />
//             </div>

//             {this.state.mainStreamManager !== undefined ? (
//               <div id="main-video" className="col-md-6">
//                 <UserVideoComponent
//                   streamManager={this.state.mainStreamManager}
//                 />
//                 <input
//                   className="btn btn-large btn-success"
//                   type="button"
//                   id="buttonSwitchCamera"
//                   onClick={this.switchCamera}
//                   value="Switch Camera"
//                 />
//               </div>
//             ) : null}
//             <div id="video-container" className="col-md-6">
//               {this.state.publisher !== undefined ? (
//                 <div
//                   className="stream-container col-md-6 col-xs-6"
//                   onClick={() =>
//                     this.handleMainVideoStream(this.state.publisher)
//                   }
//                 >
//                   <UserVideoComponent streamManager={this.state.publisher} />
//                 </div>
//               ) : null}
//               {this.state.subscribers.map((sub, i) => (
//                 <div
//                   key={i}
//                   className="stream-container col-md-6 col-xs-6"
//                   onClick={() => this.handleMainVideoStream(sub)}
//                 >
//                   <UserVideoComponent streamManager={sub} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : null}
//       </RendererWrapper>
//     );
//   }

//   /**
//    * --------------------------
//    * SERVER-SIDE RESPONSIBILITY
//    * --------------------------
//    * These methods retrieve the mandatory user token from OpenVidu Server.
//    * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
//    * the API REST, openvidu-java-client or openvidu-node-client):
//    *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
//    *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
//    *   3) The Connection.token must be consumed in Session.connect() method
//    */

//   getToken() {
//     return this.createSession(this.state.mySessionId).then((sessionId) =>
//       this.createToken(sessionId)
//     );
//   }

//   createSession(sessionId) {
//     return new Promise((resolve, reject) => {
//       var data = JSON.stringify({ customSessionId: sessionId });
//       axios
//         .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions", data, {
//           headers: {
//             Authorization:
//               "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
//             "Content-Type": "application/json",
//           },
//         })
//         .then((response) => {
//           console.log("CREATE SESION", response);
//           resolve(response.data.id);
//         })
//         .catch((response) => {
//           var error = Object.assign({}, response);
//           if (error?.response?.status === 409) {
//             resolve(sessionId);
//           } else {
//             console.log(error);
//             console.warn(
//               "No connection to OpenVidu Server. This may be a certificate error at " +
//                 OPENVIDU_SERVER_URL
//             );
//             if (
//               window.confirm(
//                 'No connection to OpenVidu Server. This may be a certificate error at "' +
//                   OPENVIDU_SERVER_URL +
//                   '"\n\nClick OK to navigate and accept it. ' +
//                   'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
//                   OPENVIDU_SERVER_URL +
//                   '"'
//               )
//             ) {
//               window.location.assign(
//                 OPENVIDU_SERVER_URL + "/accept-certificate"
//               );
//             }
//           }
//         });
//     });
//   }

//   createToken(sessionId) {
//     return new Promise((resolve, reject) => {
//       var data = {};
//       axios
//         .post(
//           OPENVIDU_SERVER_URL +
//             "/openvidu/api/sessions/" +
//             sessionId +
//             "/connection",
//           data,
//           {
//             headers: {
//               Authorization:
//                 "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
//               "Content-Type": "application/json",
//             },
//           }
//         )
//         .then((response) => {
//           console.log("TOKEN", response);
//           resolve(response.data.token);
//         })
//         .catch((error) => reject(error));
//     });
//   }
// }
