import React, { useState } from "react";
import { CustomButton } from "../../ui/Button";
import Modal from "../../ui/Modal";
import { AnimatePresence } from "framer-motion";

import {
  DevName,
  DevRole,
  GreetingsText,
  CloseModalButton,
  VideoContainer,
  HeroContainer,
  HeroText,
  InfoContainer,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { aboutData } from "./../../../static-data/about";

const VIDEO_INTRODUCTION = "https://www.youtube.com/embed/5L4DQfVIcdg";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <HeroContainer>
      <InfoContainer>
        <GreetingsText>Hello Friend !, I'm</GreetingsText>
        <DevName>Batista Olivera</DevName>
        <DevRole>FullStack Developer</DevRole>
        <HeroText>{aboutData.heroText}</HeroText>
        <CustomButton onClick={() => setShowModal(true)}>
          play my introduction
        </CustomButton>
        <AnimatePresence>
          {showModal && (
            <Modal>
              <VideoContainer
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
              >
                <CloseModalButton onClick={() => setShowModal(false)}>
                  <AiOutlineClose />
                </CloseModalButton>
                <iframe
                  width="560"
                  height="315"
                  src={VIDEO_INTRODUCTION}
                  title="My pitch"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoContainer>
            </Modal>
          )}
        </AnimatePresence>
      </InfoContainer>
    </HeroContainer>
  );
};

export default Hero;
