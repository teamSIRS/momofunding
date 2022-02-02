import { Button } from "react-bootstrap";
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
  TmpImage,
  WeakSwitch,
  ButtonIconInactive,
} from "./styles";

import {
  videocamOutline,
  micOutline,
  videocamOffOutline,
  micOffOutline,
} from "ionicons/icons";
import ImageUploader from "../../../ImageUploader/ImageUploader";
import { useState } from "react";

export const RTCRenderer = () => {
  const [camActive, setCamActive] = useState(true);
  const [micActive, setMicActive] = useState(true);

  const onCamClick = () => {
    setCamActive((now) => !now);
  };
  const onMicClick = () => {
    setMicActive((now) => !now);
  };

  return (
    <RendererWrapper>
      <video autoPlay playsInline width={400} height={400}></video>
      <TmpImage src="https://e3.365dm.com/21/04/1600x900/skynews-ludwig-streamer-twitch_5342007.png?20210414145833"></TmpImage>
      <Dashboard>
        <DashboardHeader>라이브 만들기</DashboardHeader>
        <DashboardContent>
          <h5>세부정보 설정</h5>
          <DashBoardInputBox>
            제목 (필수항목)
            <DashboardInput
              id="title"
              required
              placeholder="라이브 제목을 알려주세요"
            ></DashboardInput>
          </DashBoardInputBox>
          <DashBoardInputBox height="150px">
            설명
            <DashBoardTextArea
              id="desc"
              required
              placeholder="시청자에게 라이브에 대해 설명해주세요"
            ></DashBoardTextArea>
          </DashBoardInputBox>
          <h5>썸네일 이미지 등록</h5>
          <ImageUploader />
        </DashboardContent>
        <DashBoardFooter>
          {camActive ? (
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
          {micActive ? (
            <Switch onClick={onMicClick}>
              <ButtonIconActive icon={micOutline}></ButtonIconActive>
            </Switch>
          ) : (
            <WeakSwitch onClick={onMicClick}>
              <ButtonIconInactive icon={micOffOutline}></ButtonIconInactive>
            </WeakSwitch>
          )}

          <Button type="submit">라이브 열기</Button>
        </DashBoardFooter>
      </Dashboard>
    </RendererWrapper>
  );
};
