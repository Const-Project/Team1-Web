import { css, Global } from "@emotion/react";
import font from "./font";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${font}
      * {
        font-family: "Noto Sans KR", serif;
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
      }
      body {
        margin-left: 70px;
      }
      li {
        margin: 0px;
      }
      li,
      ol,
      ul {
        list-style: none;
      }
    `}
  />
);
export default GlobalStyle;
