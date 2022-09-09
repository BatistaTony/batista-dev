import React from "react";
import {
  ProjectsContainer,
  ProjectsCard,
  ProjectsCardDescription,
  ProjectsCardFooter,
  ProjectsCardLinkList,
  ProjectsCardLinkListItem,
  ProjectsCardSkillsList,
  ProjectsCardSkillsListItem,
  ProjectsCardTitle,
  ProjectsList,
  ProjectsContainerTitle,
} from "./styles";

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsContainerTitle>Projects</ProjectsContainerTitle>
      <ProjectsList>
        {[1, 2, 3, 3, 4, 5].map((card) => (
          <ProjectsCard>
            <ProjectsCardTitle>ANGOLA SO</ProjectsCardTitle>
            <ProjectsCardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum dolor asperiores beatae.
            </ProjectsCardDescription>
            <ProjectsCardSkillsList>
              <ProjectsCardSkillsListItem>React</ProjectsCardSkillsListItem>
            </ProjectsCardSkillsList>
            <ProjectsCardFooter>
              <ProjectsCardLinkList>
                <ProjectsCardLinkListItem>someth</ProjectsCardLinkListItem>
              </ProjectsCardLinkList>
            </ProjectsCardFooter>
          </ProjectsCard>
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default Projects;
