import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/layout/layout";
import { GlobalStyle, theme } from "./styles/global.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Layout>
          <h1>Content of the page</h1>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
