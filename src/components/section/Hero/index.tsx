import React from "react";

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
        <HeroText>Something COOL HERE</HeroText>
        <HeroButton>Play</HeroButton>
      </InfoContainer>
    </HeroContainer>
  );
};

export default Hero;
