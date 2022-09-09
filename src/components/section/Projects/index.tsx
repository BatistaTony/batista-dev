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
              Voluptatum dolor asperiores beatae. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Culpa quos reiciendis odit dolorem
              totam error nostrum nulla deserunt, numquam excepturi ipsum sequi
              quasi facilis doloremque iste debitis sit quae magnam.
            </ProjectsCardDescription>
            <ProjectsCardSkillsList>
              <ProjectsCardSkillsListItem>React</ProjectsCardSkillsListItem>
            </ProjectsCardSkillsList>
            <ProjectsCardFooter>
              <ProjectsCardLinkList>
                <ProjectsCardLinkListItem />
                <ProjectsCardLinkListItem />
                <ProjectsCardLinkListItem />
                <ProjectsCardLinkListItem />
              </ProjectsCardLinkList>
            </ProjectsCardFooter>
          </ProjectsCard>
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default Projects;
