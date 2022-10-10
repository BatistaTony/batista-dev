import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  

    * {
      
        font-family:'Lato', sans-serif;
        padding:0;
        margin:0;
        -moz-box-sizing: inherit;
       box-sizing: inherit;
  -webkit-transition-property: all;
          transition-property: all;
  -webkit-transition-duration: .6s;
          transition-duration: .6s;
  -webkit-transition-timing-function: ease;
          transition-timing-function: ease;
    }

    body {
      background-color: #1e1d40;
   
    }
`;

export const theme: DefaultTheme = {
  colors: {
    bg: "#0A192F",
    primaryWhite: "#f2e6d8",
  },
};

/*


#d90d32
#1e1d40
#1b65a6
#4ab0d9
#f2e6d8


*/
