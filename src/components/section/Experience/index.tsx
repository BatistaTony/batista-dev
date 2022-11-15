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
import { experiences } from "./../../../static-data/experience";

const ExperienceHistory = () => {
  const [experienceHistoryData, setExperienceHistoryData] =
    useState<ExperienceHistoryType[]>(experiences);

  return (
    <ExperienceHistoryContainer>
      <ExperienceTitle>💼 my work experiences</ExperienceTitle>
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
                    <span> {"Fully Remote"}</span>
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
