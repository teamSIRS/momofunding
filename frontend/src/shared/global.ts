import { createGlobalStyle, css } from "styled-components";
import "./fonts.css";

type BrandColors = string;

export const MomoWeakColor: BrandColors = "#DDDEED";
export const MomoColor: BrandColors = "#6667AB";
export const MomoStrongColor: BrandColors = "#3C3D8B";

export const bodyStyles = css`
  font-family: "Noto Sans KR";
  margin: 0px;
  padding: 0px;
  background-color: #f2f2f2;
  scrollbar-width: 0;
  /* -ms-overflow-style: none; */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const GlobalStyle = createGlobalStyle`
  html {
    --primaryGradient: linear-gradient(93.12deg, #472a9d, #321b76);
    --primary: ${MomoColor};
    --secondaryGradient: linear-gradient(93.12deg, #DDDEED, #6667AB ); 
    --secondaryBoxShadow: 0px 10px 15px rgba(61, 61,139, 30%);
    --transparentLightGradient: linear-gradient(93.12deg, rgba(221,222,237,20%), rgba(221,222,237,50%));
    --success: #B0E0E6;
    --successStrong: #6BB3BC;
    --successHeavy: #21747E;
    --successGradient: linear-gradient(93.12deg, var(--success), var(--successStrong));
    --successGradientStrong: linear-gradient(93.12deg, var(--successHeavy), var(--successStrong))
  }
  body {
    ${bodyStyles};
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
