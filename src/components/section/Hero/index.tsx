import React from "react";
import { CustomButton } from "../../ui/Button";

import {
  DevName,
  DevRole,
  GreetingsText,
  HeroButton,
  HeroContainer,
  HeroText,
  InfoContainer,
} from "./styles";

const Hero = () => {
  return (
    <HeroContainer>
      <InfoContainer>
        <GreetingsText>Hello, Friend !, I'm</GreetingsText>
        <DevName>Batista Olivera</DevName>
        <DevRole>FullStack Developer</DevRole>
        <HeroText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          autem. Distinctio doloremque dolores natus consequatur. Inventore quo
          adipisci tempora sequi.
        </HeroText>
        <CustomButton>play my introduction</CustomButton>
      </InfoContainer>
    </HeroContainer>
  );
};

export default Hero;
