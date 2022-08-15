import "styled-components";

interface ThemeType {
  colors: {
    bg: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
    };
  }
}
