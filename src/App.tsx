import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/global.style";
import { Route, Routes } from "react-router-dom";
import { AboutPage, ExperiencePage, HomePage, ProjectsPage } from "./pages";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />{" "}
        <Routes>
          <Route path="/about" element={<AboutPage />} />

          <Route path="/experience" element={<ExperiencePage />} />

          <Route path="/" element={<HomePage />} />

          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </ThemeProvider>{" "}
    </div>
  );
}

export default App;
