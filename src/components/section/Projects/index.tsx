import React, { useState } from "react";
import {
  ProjectsContainer,
  ProjectsList,
  ProjectsContainerTitle,
} from "./styles";
import ProjectCard from "./project-card";
import { Project } from "../../../typescript/types";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Test Mode",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dolor asperiores beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quos reiciendis odit dolorem totam error nostrum nulla deserunt, numquam excepturi ipsum sequi quasi facilis doloremque iste debitis sit quae ",
      github: "https://github.com/project",
      liveUrl: "https://wwww.google.com",
      tools: ["React", "Redux", "Css", "Firebase"],
    },
    {
      id: "2",
      title: "Test Mode",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dolor asperiores beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quos reiciendis odit dolorem totam error nostrum nulla deserunt, numquam excepturi ipsum sequi quasi facilis doloremque iste debitis sit quae ",
      github: "https://github.com/project",
      liveUrl: "https://wwww.google.com",
      tools: ["React", "Redux", "Css", "Firebase"],
    },
    {
      id: "3",
      title: "Test Mode",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dolor asperiores beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quos reiciendis odit dolorem totam error nostrum nulla deserunt, numquam excepturi ipsum sequi quasi facilis doloremque iste debitis sit quae ",
      github: "https://github.com/project",
      liveUrl: "https://wwww.google.com",
      tools: ["React", "Redux", "Css", "Firebase"],
    },
  ]);

  return (
    <ProjectsContainer>
      <ProjectsContainerTitle>Projects</ProjectsContainerTitle>
      <ProjectsList>
        {projects.map((data) => (
          <ProjectCard key={data.id} data={data} />
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default Projects;
