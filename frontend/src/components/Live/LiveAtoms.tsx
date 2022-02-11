import { atom } from "recoil";

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

export const publisherState = atom({
  key: "publisherState",
  default: undefined,
});

export const titleState = atom({
  key: "titleState",
  default: "",
});
