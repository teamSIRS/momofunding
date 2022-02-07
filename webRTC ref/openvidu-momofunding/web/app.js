// <<<용어 사전>>>

// 엄청 간단하게만 설명 쓰겠습니당..
// session : 서버에 존재하는 화상통화 room 자체를 말함.
// MediaStream : Audio 및 Video를 나타내는 데이터 집합 (WebRTC 용어)
// Stream : MediaStream을 가지고 있고, MediaStream을 조작하는 함수나 관련 property 를 가지고 있는 객체.
// Publish :  사용자가 자신의 장치에서 Media Stream을 받아온 뒤, 
//            이를 Stream으로 감싸서 이를 session에 전송하는 행위를 publish라고 한다.
// SubScribe : 사용자는 서버에 연결될 때 서버에 있는 Stream을 자동으로 수신하며,
//             받은 Stream을 DOM Element에 추가하고 이를 session에 알리는 행위를 subscribe라고 한다.

// [역할에 대해]
// 각 Connection은 역할을 가진다.
// SUBSCRIBER: Session.subscribe 를 호출하여 다른 사용자가 publish한 스트림을 subscribe 할 수 있습니다.
// PUBLISHER: SUBSCRIBER 권한 + Session.publish 를 호출하여 자신의 스트림을 publish 할 수 있습니다.
// MODERATOR: SUBSCRIBER + PUBLISHER 권한 + Session.forceUnpublish 및 Session.forceDisconnect 를 호출하여 다른 Connection에 대해 publish 취소 또는 연결 해제를 강제할 수 있습니다.

// token : session에 접근하기 위한 wss 프로토콜 기반의 url.
// token 예시) wss://i6a202.p.ssafy.io?sessionId=SessionA&token=tok_GPYRnarlwUdOk9MM
// token은 Connection 객체가 생성될 때 동시에 생성되며, Connection 객체가 가지고 있다.

// Connection : 각 사용자가 session에 연결하기 전에 생성하는 객체. 세션에 대한 각 사용자의 연결 정보를 나타낸다.
//              session에 접근할 때 사용되는 token을 가지고 있다. 또한 media server, 브라우저 정보, 유저 ip 등 등 연결과 관련된 다양한 정보들을 가지고있다.
//              아마도 session이 각 유저한테 접근할 때 (ex. publish된 stream을 다른 유저에게 전달 등) 사용되지 않을까...하고 추측

var OV;
var session;
var subscriber;
var isCreated = false;
var publisher;
var connectionId2;

// 비디오 ONOFF
// publisher.stream.videoActive는 비디오 활성화 여부)
// publishVideo는 true를 주면 비디오가 켜지고, false는 꺼짐
function toggleCamera() {
  publisher.publishVideo(!publisher.stream.videoActive);
}

// 오디오 ONOFF
// publisher.stream.audioActive 오디오 활성화 여부
// publishAudio true를 주면 오디오가 켜지고, false는 꺼짐
function toggleAudio() {
  publisher.publishAudio(!publisher.stream.audioActive);
}

// 라이브 참여를 누르는 순간 joinSession함수 실행 (제일 먼저 실행되는 코드)
// 우리는 1 : N 연결을 할 예정 (1명의 publisher와 N명의 subscriber)
function joinSession() {
  //
  var mySessionId = document.getElementById("sessionId").value;
  
  var surveyList = document.getElementById("surveyList");
  
  // session.signal : 다른 사용자에게 String값을 전달하고 싶을 때 사용.
  // type 인자에 시그널 이름을 넣고, data 인자에 전달할 스트링을 넣는다
  // session.on("signal:type인자에 넣었던 이름") 으로 수신된 signal에 대한 이벤트 처리 가능.
  // 서버에 데이터, 타입 등이 전달된 후 다른 사용자에게 해당 데이터가 자동으로 전달된다.
  surveyList.addEventListener("click", function (e) {
    session.signal({
      data: e.target.innerText, // Any string (optional)
      to: [], // Array of Connection objects (optional. Broadcast to everyone if empty)
      type: "survey-id", // The type of message (optional)
    });
  });
  
  OV = new OpenVidu();
  session = OV.initSession();

  
  // 아래의 streamCreated 이벤트는 stream을 받을 때 일어난다.
  // ** stream을 받는 시점 **
  // 1. 누군가가 session에 stream을 publish하면, 이와 동시에 세션에 접속하고 있던 모든 사람들이 그 stream을 받는다.
  // 2. 누군가가 session에 새로 참여하면, 서버에 있던(publish) stream을 모두 받는다.
  // (참고 링크 : https://docs.openvidu.io/en/stable/api/openvidu-browser/classes/streamevent.html)
  session.on("streamCreated", function (event) {
    console.log("이벤트 스트림임");
    console.log(event.stream);
    subscriber = session.subscribe(event.stream, "creatorVideo");
    console.log("구독자 스트림임");
    console.log(subscriber.stream);
  });
  
  // 서버에서 signal을 수신했을 때 발생. survey id를 받는 용도
  session.on("signal:survey-id", (event) => {
    console.log(event.data);
  });
  
  
  // 서버에서 signal을 수신했을 때 발생. 채팅 메세지를 받는 용도
  session.on("signal:my-chat", (event) => {
    const chat = document.getElementById("chat");
    const ul = chat.querySelector("ul");
    const msg = document.createElement("li");
    msg.innerText = `${event.data}`;
    ul.appendChild(msg);
    // console.log(event.from); // Connection object of the sender
    // console.log(event.type); // The type of message ("my-chat")
  });

  // getToken을 불러 세션을 만들고(또는 연결하고) Connection을 만든다.
  // 이 후 token을 통해 session.connect 실행하면 서버의 session에 연결된다.
  getToken(mySessionId).then((token) => {
    session
      .connect(token)
      .then(() => {
        document.getElementById("session-header").innerText = mySessionId;
        document.getElementById("join").style.display = "none";
        document.getElementById("session").style.display = "block";

        console.log("this is test");
        
        // 개설자일 경우 
        if (!isCreated) {
          // initpublisher 함수
          // 사용자의 media stream (local media stream이라고 부름)을 가져오고 (getUserMedia 사용. WebRTC 함수)
          // 그걸 HTML DOM에 추가 (인자로 DOM element의 id 받음)
          publisher = OV.initPublisher("creatorVideo");

          // 스트림을 서버에 publish (publisher가 stream도 가지고있음)
          session.publish(publisher);

        }
        
        // 테스트용 코드임
        // getfunc(mySessionId, connectionId2);
      })
      .catch((error) => {
        console.log(
          "There was an error connecting to the session:",
          error.code,
          error.message
        );
      });
  });
}
//Leave누르면 세션 연결 종료
function leaveSession() {
  session.disconnect();
  document.getElementById("join").style.display = "block";
  document.getElementById("session").style.display = "none";
}

// 페이지 벗어나면 실행되는 함수 입니다.
window.onbeforeunload = function () {
  if (session) session.disconnect();
};

//채팅 관련 시그널 보내는 함수
function sendText() {
  const sendMsg = document.getElementById("textMessage");
  // "my-chat"타입과 채팅 데이터를 담아 서버로 전달 (signal 설명은 위에 있음)
  session
    .signal({
      data: `윤하 : ${sendMsg.value}`, // Any string (optional)
      to: [], // Array of Connection objects (optional. Broadcast to everyone if empty)
      type: "my-chat",
    })
    .then(() => {
      console.log("Message successfully sent");
    });

  sendMsg.value = "";
}

// 랜덤 세션 ID만들 때 쓰일 함수 
function randomString() {
  return Math.random().toString(36).slice(2);
}


/**
 * --------------------------
 * SERVER-SIDE RESPONSIBILITY
 * --------------------------
 * These methods retrieve the mandatory user token from OpenVidu Server.
 * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
 * the API REST, openvidu-java-client or openvidu-node-client):
 *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
 *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
 *   3) The Connection.token must be consumed in Session.connect() method
 */

// ec2에서 설정해준 URL과 비밀번호. opnevidu 서버에 REST API요청할 때 사용
var OPENVIDU_SERVER_URL = "https://i6a202.p.ssafy.io";
var OPENVIDU_SERVER_SECRET = "9793";

function getToken(mySessionId) {
  return createSession(mySessionId).then((sessionId) => createToken(sessionId));
}

// Openvidu 서버에서 Session을 초기화한 뒤(생성한 뒤), 관련 정보를 담은 Session Object를 반환한다.
function createSession(sessionId) {
  // See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-openviduapisessions
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: OPENVIDU_SERVER_URL + "/openvidu/api/sessions",
      data: JSON.stringify({ customSessionId: sessionId }),
      headers: {
        Authorization: "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
        "Content-Type": "application/json",
      },
      success: (response) => resolve(response.id),
      error: (error) => {
        if (error.status === 409) {
          isCreated = true;
          resolve(sessionId);
        } else {
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
            location.assign(OPENVIDU_SERVER_URL + "/accept-certificate");
          }
        }
      },
    });
  });
}

// 서버에서 세션과 해당 유저에 대한 Connection 이 만들어 지고, 관련 정보를 담은 Connection 객체가 반환된다.
// 함수 이름이 createToken인데, openvidu에서 그렇게 줬음. Connection도 만들고, token도 만드는 것
function createToken(sessionId) {
  // 
  var jsonBody = {
		// role: "SUBSCRIBER",
		// kurentoOptions: {}
	};
  // See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-connection
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url:
        OPENVIDU_SERVER_URL +
        "/openvidu/api/sessions/" +
        sessionId +
        "/connection",
      data: JSON.stringify(jsonBody),
      headers: {
        Authorization: "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
        "Content-Type": "application/json",
      },
      success: (response) => {console.log("여기서 부터 출력할꺼야!!"); console.log(response); console.log("출력 끝~~"); connectionId2 = response.id; resolve(response.token)},
      error: (error) => reject(error),
    });
  });
}

// 커넥션 객체 가져오는 API (테스트 용도)

// function getfunc(sessionId, connectionId) {

//   // 
//   var jsonBody = {
// 		// role: "SUBSCRIBER",
// 		// kurentoOptions: {}
// 	};
//   // See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-connection
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       type: "GET",
//       url:
//         OPENVIDU_SERVER_URL +
//         "/openvidu/api/sessions/" +
//         sessionId +
//         "/connection/"
//         + connectionId,
//       headers: {
//         Authorization: "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
//         "Content-Type": "application/json",
//       },
//       success: (response) => {console.log("난 겟이야~~"); console.log(response); console.log("출력 끝~~"); resolve(response.token)},
//       error: (error) => reject(error),
//     });
//   });
// }