import axios from "axios";
import { closeOutline, sendOutline } from "ionicons/icons";
import { ChangeEventHandler, MouseEventHandler, useEffect } from "react";
import { FormEventHandler, useState } from "react";
import { useRecoilState } from "recoil";
import { baseUrl } from "../../../../App";
import { nicknameState } from "../../../../atoms";
import { msgsState, pjtIdState, sessionState } from "../../LiveAtoms";
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
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useRecoilState(msgsState);
  const [isStaff, _1] = useRecoilState(authorizationState);
  const [recoilSession, setSession] = useRecoilState(sessionState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [pjtId, _] = useRecoilState(pjtIdState);
  const [project, setProject] = useState({
    id: -1,
    projectStateId: -1,
    projectCategoryId: -1,
    userId: -1,
    projectName: "default pjt name",
    fundingGoal: -1,
    mainImageUrl: "#",
    subImageUrl: "#",
    summary: "default summary",
    projectContent: "default content",
    currentAmount: -1,
    popularity: -1,
    expirationDate: "2022-03-05T00:00:00",
    isLivePlaying: false,
  });

  // 시그널 보내기
  const sendChat: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (message === "") return;

    const data = { nickname: nickname, message: message };

    console.log("보냄!");
    recoilSession
      .signal({
        data: JSON.stringify(data),
        to: [],
        type: "momo-chat",
      })
      .then(() => {
        setMessage("");
        setMessages([...messages, data]);
      });
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.target.value);
  };

  const sendChatByClick: MouseEventHandler<HTMLIonIconElement> = () => {
    if (message === "") return;
    const data = { nickname: nickname, message: message };

    recoilSession
      .signal({
        data: JSON.stringify(data),
        to: [],
        type: "momo-chat",
      })
      .then(() => {
        setMessage("");
        setMessages([...messages, data]);
      });
  };

  const onLoad = async (pjtId: number) => {
    await axios({
      url: `/projects/${pjtId}`,
      method: "get",
      baseURL: baseUrl,
    })
      .then((response) => {
        setProject(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onLoad(pjtId);
  }, []);

  useEffect(() => {
    onLoad(pjtId);
  }, [pjtId]);

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
          <ProjectClose to={`/myproject/${pjtId}`}>
            <LiveBtnRoundDangerSmall>
              <ChatIcon icon={closeOutline}></ChatIcon>
            </LiveBtnRoundDangerSmall>
            <ProjectText>스트림 끝내기</ProjectText>
          </ProjectClose>
        ) : (
          <ProjectLink to={`/projects/${project.id}`}>
            <ProjectBtn>
              <ImageForBg src={project.mainImageUrl} />
            </ProjectBtn>
            <ProjectText>
              {project.projectName}
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
