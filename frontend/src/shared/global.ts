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
  html {
    --primaryGradient: linear-gradient(93.12deg, #472a9d, #321b76);
    --primary: ${MomoColor};
    --secondaryBoxShadow: 0px 10px 15px rgba(61, 61,139, 30%);
    --transparentLightGradient: linear-gradient(93.12deg, rgba(221,222,237,20%), rgba(221,222,237,50%));
  }
  body {
    ${bodyStyles}
  }
  a {
    text-decoration: none;
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
