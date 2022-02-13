import { atom } from "recoil";

export const nicknameState = atom({
  key: "nickname",
  default: "",
});

export const isLoginState = atom({
  key: "isLogin",
  default: false,
});

export const userIdState = atom({
  key: "userId",
  default: 0,
});

// jwt token 가져다 쓰기 => headers: setAuthorizationToken(),
export default function setAuthorizationToken() {
  const token = localStorage.getItem("auth-token");
  const config = {
    Authorization: `${token}`,
  };
  return config;
}

export function setAuthorizationEmailToken(token) {
  const config = {
    Authorization: `${token}`,
  };
  return config;
}

export function comma(str){
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}