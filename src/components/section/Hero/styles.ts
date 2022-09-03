import styled from "styled-components";

export const HeroContainer = styled.div`
  box-sizing: border-box;
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
