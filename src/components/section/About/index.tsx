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

const About = () => {
  const skills = [
    { title: "React", icon: "react-original" },
    { title: "Typescript", icon: "typescript-original" },
    { title: "Javascript", icon: "javascript-plain" },
    { title: "Redux", icon: "redux-original" },
  ];

  return (
    <AboutContainer>
      <AboutContentContainer>
        <AboutInfoContainer>
          <AboutTitle>A little bit about me.</AboutTitle>

          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius
            perspiciatis soluta eos omnis ullam voluptatem molestiae laborum
            iusto! Atque, eius facere? Suscipit explicabo voluptatum totam at,
            commodi ullam officia! perspiciatis soluta eos omnis ullam
            voluptatem molestiae laborum iusto! Atque, eius facere? Suscipit
            explicabo voluptatum totam at, commodi ullam officia!
          </AboutText>

          <AboutText className="text1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos hic
            sint, voluptatem nesciunt voluptatibus in officiis ab illum commodi
            laborum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eos hic sint, voluptatem nesciunt voluptatibus in officiis ab illum
            commodi laborum.
          </AboutText>

          <AboutText className="text2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos hic
            sint, voluptatem nesciunt voluptatibus in officiis ab illum commodi
            laborum.
          </AboutText>

          <AboutSkillsContainer>
            {skills.map((skill) => (
              <SkillItem key={skill.title}>
                <i className={`devicon-${skill.icon}`}></i>
                {skill.title}
              </SkillItem>
            ))}
          </AboutSkillsContainer>
        </AboutInfoContainer>
        <AboutPictureContainer>
          <BehindPicture />
          <Picture src="/pic.png" />
        </AboutPictureContainer>
      </AboutContentContainer>
    </AboutContainer>
  );
};

export default About;
