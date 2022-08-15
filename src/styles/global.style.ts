import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family:Arial, Helvetica, sans-serif;
        padding:0;
        margin:0;
    }
`;

export const theme: DefaultTheme = {
  colors: {
    bg: "#ddd",
  },
};
