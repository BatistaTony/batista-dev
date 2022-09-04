import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family:Arial, Helvetica, sans-serif;
        padding:0;
        margin:0;
    }

    body {
      background-color: #097392;
    }
`;

export const theme: DefaultTheme = {
  colors: {
    bg: "#0A192F",
    primaryWhite: "#fff",
  },
};

/*

#097392
#83b4b3
##fff0ce
#d55534
#383838


*/
