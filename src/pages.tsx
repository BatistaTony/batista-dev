import React from "react";
import { Layout } from "./components/layout/layout";
import About from "./components/section/About";
import ExperienceHistory from "./components/section/Experience";
import Hero from "./components/section/Hero";

export const HomePage = () => (
  <Layout>
    <Hero />
  </Layout>
);

export const ExperiencePage = () => (
  <Layout>
    <ExperienceHistory />
  </Layout>
);

export const AboutPage = () => (
  <Layout>
    <About />
  </Layout>
);
