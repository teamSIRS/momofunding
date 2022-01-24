import { createGlobalStyle, css } from "styled-components";
import "./fonts.css";

export const bodyStyles = css`
  font-family: "Gowun Dodum";
  margin: 0px;
  padding: 0px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;

export const GlobalColor = css`
  border-color: #6667ab;
  color: #6667ab;
`;

export default GlobalStyle;
