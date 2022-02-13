import axios from "axios";
import { request } from "https";

const BASE_PATH = "http://localhost:8080/";

export function signup() {
  return fetch(`${BASE_PATH}/users`).then((response) => response.json());
}