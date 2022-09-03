import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/layout/layout";
import About from "./components/section/About";
import Hero from "./components/section/Hero";
import { GlobalStyle, theme } from "./styles/global.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Layout>
          {/* <Hero /> */}
          <About />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
