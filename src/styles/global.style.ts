import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family:Arial, Helvetica, sans-serif;
        padding:0;
        margin:0;
    }

    body {
      background-color: #0A192F;
    }
`;

export const theme: DefaultTheme = {
  colors: {
    bg: "#0A192F",
    primaryWhite: "#d9d9d9",
  },
};
