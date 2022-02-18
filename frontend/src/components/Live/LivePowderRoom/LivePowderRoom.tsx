import RTCRenderer from "./RTCRenderer";
import { LivePowderRoomWrapper } from "./styles";

export const LivePowderRoom = () => {
  return (
    <LivePowderRoomWrapper>
      <RTCRenderer />
    </LivePowderRoomWrapper>
  );
};
