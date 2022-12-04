import React from "react";
import {
  AboutContainer,
  AboutContentContainer,
  AboutInfoContainer,
  AboutPictureContainer,
  AboutSkillsContainer,
  AboutText,
  AboutTitle,
  BehindPicture,
  Picture,
  SkillItem,
} from "./styles";
import { aboutData } from "./../../../static-data/about";

const About = () => {
  const skills = aboutData.skills;

  return (
    <AboutContainer>
      <AboutContentContainer>
        <AboutInfoContainer>
          <AboutTitle>📜 A little bit about me.</AboutTitle>

          <AboutText>{aboutData.text1}</AboutText>

          <AboutText className="text1">{aboutData.text2}</AboutText>

          <AboutText className="text2">{aboutData.text3}</AboutText>
        </AboutInfoContainer>
        <AboutPictureContainer>
          <BehindPicture />
          <Picture src="/pic1.jpg" />
        </AboutPictureContainer>

        <AboutSkillsContainer>
          {skills.map((skill) => (
            <SkillItem key={skill.title}>
              <i className={`devicon-${skill.icon}`}></i>
              {skill.title}
            </SkillItem>
          ))}
        </AboutSkillsContainer>
      </AboutContentContainer>
    </AboutContainer>
  );
};

export default About;
