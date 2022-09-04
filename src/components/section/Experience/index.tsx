import React, { useState } from "react";
import { ContractType, ExperienceHistoryType } from "../../../typescript/types";

import {
  ExperienceHistoryContainer,
  ExperienceHistoryContainerContent,
  ExperienceCompanyName,
  ExperienceCompanyTime,
  ExperienceContent,
  ExperienceDescription,
  ExperienceDescriptionItem,
  ExperienceTitle,
  ExperienceYears,
  ExperienceYearsItem,
} from "./styles";

const ExperienceHistory = () => {
  const [experienceHistoryData, setExperienceHistoryData] = useState<
    ExperienceHistoryType[]
  >([
    {
      id: "1",
      company: {
        name: "Andromeda Labs",
        website: "https://www.andromedalabs.com.ao",
      },
      position: "Front End Developer",
      date: {
        from: "2019",
        to: "2021",
      },
      description: [
        "Manage complex details about projects that require analyzing design requirements, recommending technical solutions to make projects scalable, maintainable and efficient.",
        "Translate graphic visual and interactive designs into presentation layer for highly interactive web applications using responsive design and development techniques.",
        "Innovate with new ideas, research relevant tools and methodologies and implement proofs of concept.",
        "Work closely with team and designers to meet project requirements, goals and desired functionality.",
        "Work with agile framework Scrum and Kanban.",
        "Resolve issues and navigates obstacles to deliver work product.",
      ],
      address: "Angola, Luanda",
      isRemote: true,
      contractType: ContractType.Fulltime,
    },
    {
      id: "2",
      company: { name: "Hero99", website: "https://www.hero99.com.br" },
      position: "Front End Developer",
      date: {
        from: "2021",
        to: "2022",
      },
      description: [
        "Translate the UI made by designer to a functional web application.",
        "Do a pair programming with team to solve issues.",
        "Refactor a lot of components on production.",
        "Improve existent code of some components, adding clean code and make more reusable components.",
        "Meeting with designer’s team to discuss ideas of new features.",
        "Write tests for components.",
      ],
      address: "Brasil, Curitiba",
      isRemote: true,
      contractType: ContractType.Fulltime,
    },
  ]);

  const [activeExperienceHistory, setActiveExperienceHistory] = useState<
    ExperienceHistoryType
  >(experienceHistoryData[0]);

  const chooseExperienceHistory = (id: string) => {
    const found = experienceHistoryData.find((exp) => exp.id === id);

    if (found) {
      setActiveExperienceHistory(found);
    }
  };

  return (
    <ExperienceHistoryContainer>
      <ExperienceTitle>work experiences</ExperienceTitle>
      <ExperienceHistoryContainerContent>
        <ExperienceYears>
          <div className="years-list">
            <div className="sept-brdr" />
            {experienceHistoryData.map((historyItem) => (
              <ExperienceYearsItem
                onClick={() => chooseExperienceHistory(historyItem.id)}
                isActive={historyItem.id === activeExperienceHistory.id}
                key={historyItem.id}
              >
                {historyItem.date.from}
              </ExperienceYearsItem>
            ))}
          </div>
        </ExperienceYears>
        <ExperienceContent>
          <ExperienceCompanyName>
            {activeExperienceHistory.position} @
            <a href={`${activeExperienceHistory.company.website}`}>
              {activeExperienceHistory.company.name}
            </a>
          </ExperienceCompanyName>
          <ExperienceCompanyTime>
            {activeExperienceHistory.address} <div className="dot" />
            {activeExperienceHistory.date.from} {" to "}
            {activeExperienceHistory.date.to}
            <div className="dot" />
            {activeExperienceHistory.contractType}
            {activeExperienceHistory.isRemote && (
              <>
                <div className="dot" />
                {"[fully remote]"}
              </>
            )}
          </ExperienceCompanyTime>
          <ExperienceDescription>
            {activeExperienceHistory.description.map((desc) => (
              <ExperienceDescriptionItem>
                <div className="item-dot" />
                <p>{desc}</p>
              </ExperienceDescriptionItem>
            ))}
          </ExperienceDescription>
        </ExperienceContent>
      </ExperienceHistoryContainerContent>
    </ExperienceHistoryContainer>
  );
};

export default ExperienceHistory;
