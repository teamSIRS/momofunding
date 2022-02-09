import axios from "axios";
import { atom } from "recoil";

// export const nickname = atom({
//   key: "nickname",
//   default: "",
// });

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
