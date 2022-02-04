import { arrowDownCircleOutline, sendOutline } from "ionicons/icons";
import { ChangeEventHandler, MouseEventHandler, useEffect } from "react";
import { FormEventHandler, useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardInput } from "../../LivePowderRoom/RTCRenderer/styles";
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
  MessageBox,
  NickName,
  ProjectBtn,
  ProjectLink,
  ProjectText,
} from "./styles";

const Chat = () => {
  const param = useParams()["id"];
  const pjtApi = {
    title: "Apple iPhone 3GS",
  };
  const chatApis = [
    { nickname: "빌게이츠", message: "이런 쓰레기좀 만들지 마라" },
    { nickname: "영진갓", message: "서울 2반 2조 화이팅!!" },
    {
      nickname: "애플스토어 대기알바",
      message: "시간당 2만원에 대기해드려요 당근 연락주세요",
    },
    { nickname: "백승윤", message: "가즈아 🚀🚀🚀🚀🚀🚀🚀🚀" },
    { nickname: "송지호", message: "안녕하세요" },
    { nickname: "임건호", message: "안녕하세요!!" },
  ];
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([...chatApis]);

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

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById("chatBody") as HTMLElement;
      element.scrollTop = element.scrollHeight;
    });
  }, [messages]);
  return (
    <ChatWrapper>
      <ChatHeader>
        <ChatTop>
          <ChatIcon icon={arrowDownCircleOutline} />
          실시간 채팅
        </ChatTop>
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
