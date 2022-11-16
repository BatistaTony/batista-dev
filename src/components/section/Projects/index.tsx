import React, { useState } from "react";
import {
  ProjectsContainer,
  ProjectsList,
  ProjectsContainerTitle,
} from "./styles";
import ProjectCard from "./project-card";
import { Project } from "../../../typescript/types";
import { projects as projectsData } from "./../../../static-data/projects";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(projectsData);

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
