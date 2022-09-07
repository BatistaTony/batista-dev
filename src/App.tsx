import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/global.style";
import { Route, Routes } from "react-router-dom";
import { AboutPage, ExperiencePage, HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />{" "}
        <Routes>
          <Route path="/about" element={<AboutPage />} />

          <Route path="/experience" element={<ExperiencePage />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>{" "}
    </div>
  );
}

export default App;
