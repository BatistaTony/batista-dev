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
  HistoryTimeLine,
} from "./styles";
import { GoLocation } from "react-icons/go";

const ExperienceHistory = () => {
  const [experienceHistoryData, setExperienceHistoryData] = useState<
    ExperienceHistoryType[]
  >([
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
  ]);

  return (
    <ExperienceHistoryContainer>
      <ExperienceTitle>work experiences</ExperienceTitle>
      <ExperienceHistoryContainerContent>
        {experienceHistoryData.map((expData) => (
          <ExperienceContent key={expData.id}>
            <HistoryTimeLine>
              <div className="years-time-line">
                <p>{expData.date.to}</p>
                <p>{expData.date.from}</p>
              </div>
              <div className="lines-t">
                <div className="time-line-start-dot" />
                <div className="time-line-line" />
                <div className="time-line-end-dot" />
              </div>
            </HistoryTimeLine>
            <div className="time-content">
              <ExperienceCompanyName>
                {expData.position} @
                <a
                  href={`${expData.company.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {expData.company.name}
                </a>
              </ExperienceCompanyName>
              <ExperienceCompanyTime>
                <span>
                  <GoLocation /> {expData.address}
                </span>{" "}
                <div className="dot" />
                <span> {expData.contractType}</span>
                {expData.isRemote && (
                  <>
                    <div className="dot" />
                    <span> {"[fully remote]"}</span>
                  </>
                )}
              </ExperienceCompanyTime>

              <ExperienceDescription>
                {expData.description.map((desc) => (
                  <ExperienceDescriptionItem>
                    <div className="item-dot" />
                    <p className="text-desc">{desc}</p>
                  </ExperienceDescriptionItem>
                ))}
              </ExperienceDescription>
            </div>
          </ExperienceContent>
        ))}
      </ExperienceHistoryContainerContent>{" "}
    </ExperienceHistoryContainer>
  );
};

export default ExperienceHistory;
