import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
  }

  body::-webkit-scrollbar {
    width: 1.5rem;
  }

  body::-webkit-scrollbar-track {
    background-color: yellow
  }

  body::-webkit-scrollbar-thumb {
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }
`;