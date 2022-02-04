import { RendererWrapper } from "../LivePowderRoom/RTCRenderer/styles";
import Viewers from "./Viewers";

export const LiveMain = () => {
  const api = {
    viewers: 32674, // numSockets
  };
  return (
    <RendererWrapper>
      <Viewers viewers={api.viewers}></Viewers>
    </RendererWrapper>
  );
};
