import { closeOutline, sendOutline } from "ionicons/icons";
import { ChangeEventHandler, MouseEventHandler, useEffect } from "react";
import { FormEventHandler, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
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

export type ChatProps = {
  show: boolean;
};

const Chat = ({ show }: ChatProps) => {
  const param = useParams()["id"];
  const pjtApi = {
    title: "Apple iPhone 3GS",
  };
  // const [session, setSession] = useRecoilState(sessionState);
  const [message, setMessage] = useRecoilState(msgState);
  const [messages, setMessages] = useRecoilState(msgsState);
  const [isStaff, _] = useRecoilState(authorizationState);
  const [recoilSession, setSession] = useRecoilState(sessionState);

  const inputToServer = () => {
    if (message === "") return;
    const newMsg = { nickname: "anonymous", message: message };
    const updated = [...messages, newMsg];

    setMessage("");
    setMessages(updated);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    inputToServer();
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.target.value);
  };

  const onClick: MouseEventHandler<HTMLIonIconElement> = () => {
    inputToServer();
  };

  const sendSignalSessionRecoil = () => {
    recoilSession.signal({
      data: "Test!!!", // Any string (optional)
      to: [], // Array of Connection objects (optional. Broadcast to everyone if empty)
      type: "pleaseAlert", // The type of message (optional)
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
        <ChatTop onClick={(sendSignalSessionRecoil)}>실시간 채팅</ChatTop>
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

      <ChatFooter onSubmit={onSubmit}>
        <ChatTypingArea>
          <DashboardInput
            type="text"
            value={message}
            onChange={onChange}
            placeholder="채팅을 입력하세요"
          />
        </ChatTypingArea>
        <ChatButton>
          <ChatIcon onClick={onClick} icon={sendOutline}></ChatIcon>
        </ChatButton>
      </ChatFooter>
    </ChatWrapper>
  );
};

export default Chat;
