import { createGlobalStyle, css } from "styled-components";
import "./fonts.css";

type BrandColors = string;

export const MomoWeakColor: BrandColors = "#DDDEED";
export const MomoColor: BrandColors = "#6667AB";
export const MomoStrongColor: BrandColors = "#3C3D8B";

export const bodyStyles = css`
  font-family: "Gowun Dodum";
  margin: 0px;
  padding: 0px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
  a {
    &:hover{
      color: ${MomoWeakColor}
    }
    color: white;
    &:active{
      color: ${MomoStrongColor}
    }
  }
  button, .btn {
    border: 0px;
    border-radius: 5px;
    color:white;
    background-color: ${MomoColor};
    &:hover {
      background-color:${MomoWeakColor}
    }
  }
`;

export default GlobalStyle;
