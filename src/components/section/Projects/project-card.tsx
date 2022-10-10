import React from "react";
import {
  ProjectsCard,
  ProjectsCardDescription,
  ProjectsCardFooter,
  ProjectsCardLinkList,
  ProjectsCardLinkListItem,
  ProjectsCardSkillsList,
  ProjectsCardSkillsListItem,
  ProjectsCardTitle,
} from "./styles";

import { TbGlobe, TbBrandGithub } from "react-icons/tb";
import { Project } from "../../../typescript/types";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <ProjectsCard>
      <ProjectsCardTitle>{data.title}</ProjectsCardTitle>
      <ProjectsCardDescription>{data.description}</ProjectsCardDescription>
      <ProjectsCardSkillsList>
        {data.tools.map((tool) => (
          <ProjectsCardSkillsListItem key={tool}>
            {tool}
          </ProjectsCardSkillsListItem>
        ))}
      </ProjectsCardSkillsList>
      <ProjectsCardFooter>
        <ProjectsCardLinkList>
          {!!data.github && (
            <ProjectsCardLinkListItem>
              <a href={data.github} target="">
                <TbBrandGithub />
              </a>
            </ProjectsCardLinkListItem>
          )}
          <ProjectsCardLinkListItem>
            {!!data.liveUrl && (
              <a href={data.liveUrl} target="">
                <TbGlobe />
              </a>
            )}
          </ProjectsCardLinkListItem>
        </ProjectsCardLinkList>
      </ProjectsCardFooter>
    </ProjectsCard>
  );
};

export default ProjectCard;
