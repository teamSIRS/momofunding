import { closeOutline, sendOutline } from "ionicons/icons";
import { ChangeEventHandler, MouseEventHandler, useEffect } from "react";
import { FormEventHandler, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { nicknameState } from "../../../../atoms";
import { msgsState, msgState, sessionState } from "../../LiveAtoms";
import { DashboardInput } from "../../LivePowderRoom/RTCRenderer/styles";
import { authorizationState } from "../LiveMain";
import {
  ChatBody,
  ChatButton,
  ChatFooter,
  ChatHeader,
  ChatIcon,
  ChatTop,
  ChatTypingArea,
  ChatWrapper,
  ImageForBg,
  LiveBtnRoundDangerSmall,
  MessageBox,
  NickName,
  ProjectBtn,
  ProjectClose,
  ProjectLink,
  ProjectText,
} from "./styles";

import { SignalEvent } from "openvidu-browser";

export type ChatProps = {
  show: boolean;
};

const Chat = ({ show }: ChatProps) => {
  const param = useParams()["id"];
  const pjtApi = {
    title: "Apple iPhone 3GS",
  };
  // const [session, setSession] = useRecoilState(sessionState);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useRecoilState(msgsState);
  const [isStaff, _] = useRecoilState(authorizationState);
  const [recoilSession, setSession] = useRecoilState(sessionState);
  const [nickname, setNickname] = useRecoilState(nicknameState);

  // 시그널 보내기
  const sendChat: FormEventHandler<HTMLFormElement> = (event) => {
    const data = { nickname: nickname, message: message };

    event.preventDefault();
    console.log("보냄!");
    recoilSession
      .signal({
        data: JSON.stringify(data),
        to: [],
        type: "momo-chat",
      })
      .then(() => {
        console.log("발신 성공");
        setMessage("");
        setMessages([...messages, data]);
      });
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.target.value);
  };

  const sendChatByClick: MouseEventHandler<HTMLIonIconElement> = () => {
    const data = { nickname: nickname, message: message };

    recoilSession
      .signal({
        data: JSON.stringify(data),
        to: [],
        type: "momo-chat",
      })
      .then(() => {
        console.log("발신 성공");
        setMessage("");
        setMessages([...messages, data]);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById("chatBody") as HTMLElement;
      element.scrollTop = element.scrollHeight;
    });
  }, [messages]);

  return (
    <ChatWrapper className={show ? "hide" : ""}>
      <ChatHeader>
        <ChatTop>실시간 채팅</ChatTop>
        {isStaff ? (
          <ProjectClose to="#">
            <LiveBtnRoundDangerSmall>
              <ChatIcon icon={closeOutline}></ChatIcon>
            </LiveBtnRoundDangerSmall>
            <ProjectText>스트림 끝내기</ProjectText>
          </ProjectClose>
        ) : (
          <ProjectLink to={`/projects/${param}`}>
            <ProjectBtn>
              <ImageForBg src="https://image.itmedia.co.jp/mobile/articles/2109/15/si7101-iPhone13S-01.jpg" />
            </ProjectBtn>
            <ProjectText>
              {pjtApi.title}
              <br />
              {"후원하러 가기"}
            </ProjectText>
          </ProjectLink>
        )}
      </ChatHeader>
      <ChatBody id="chatBody">
        {messages.map((chat, idx) => (
          <MessageBox key={idx}>
            <NickName>{chat.nickname}</NickName>
            {chat.message}
          </MessageBox>
        ))}
      </ChatBody>

      <ChatFooter onSubmit={sendChat}>
        <ChatTypingArea>
          <DashboardInput
            type="text"
            value={message}
            onChange={onChange}
            placeholder="채팅을 입력하세요"
          />
        </ChatTypingArea>
        <ChatButton>
          <ChatIcon onClick={sendChatByClick} icon={sendOutline}></ChatIcon>
        </ChatButton>
      </ChatFooter>
    </ChatWrapper>
  );
};

export default Chat;
