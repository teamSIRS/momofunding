import { atom } from "recoil";
import { OpenVidu } from "openvidu-browser";
var OV = new OpenVidu();

export const micState = atom({
  key: "micActive",
  default: false,
});

export const camState = atom({
  key: "camActive",
  default: false,
});

export const audioState = atom({
  key: "audioActive",
  default: false,
});

export const titleState = atom({
  key: "titleState",
  default: "",
});

export const msgState = atom({
  key: "msgState",
  default: "",
});

type MessageProps = {
  nickname: string;
  message: string;
}[];

export const msgsState = atom({
  key: "msgState",
  default: [] as MessageProps,
});

export const sessionState = atom({
  key: "sessionState",
  default: OV.initSession(),
  dangerouslyAllowMutability: true,
});

export const publisherState = atom({
  key: "publisherState",
  default: OV.initPublisher(""),
  dangerouslyAllowMutability: true,
});
