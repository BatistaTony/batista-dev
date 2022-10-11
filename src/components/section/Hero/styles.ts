import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  box-sizing: border-box;
  height: auto;
  min-height: 100%;
`;

export const InfoContainer = styled.div``;

export const GreetingsText = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const DevName = styled.h1`
  font-size: 3.5rem;
  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const DevRole = styled.h1`
  font-size: 5rem;
  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const HeroText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-top: 15px;
  width: 70%;
`;

export const HeroButton = styled.button`
  border: none;
  outline: none;
  width: 200px;
  height: 40px;
  font-size: 1.2rem;
  color: black;
  background: #d9d9d9;
  border-radius: 14px;
  margin-top: 40px;
  cursor: pointer;
`;

export const VideoContainer = styled(motion.div)`
  width: 55%;
  height: 500px;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 10px;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    background: #1e1d40;
  }
`;

export const CloseModalButton = styled.button`
  width: 35px;
  height: 30px;
  background: transparent;
  position: absolute;
  top: -40px;
  right: 0;
  border: 1px solid ${(props) => props.theme.colors.primaryWhite};
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  svg {
    transform: scale(1.5);
    fill: ${(props) => props.theme.colors.primaryWhite};
  }
`;
