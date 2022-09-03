import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;

export const AboutContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 70% 30%;
`;

export const AboutInfoContainer = styled.div`
  width: 100%;
  height: 100%;

  .text1 {
    width: 80%;
  }

  .text2 {
    width: 70%;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 20px;
`;

export const AboutText = styled.p`
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.primaryWhite};
  width: 95%;
`;

export const AboutSkillsContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const SkillItem = styled.div`
  margin-right: 15px;
  background: ${(props) => props.theme.colors.primaryWhite};
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 15px;
  color: black;
`;

export const AboutPictureContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 45px;
`;

interface BehindPictureProps {
  src?: string;
}

export const Picture = styled.div<BehindPictureProps>`
  width: 250px;
  height: 250px;
  background: green;
  border-radius: 6px;
  position: absolute;
  background: ${({ src }) => (src ? `url(${src})` : "#342e2e")};
  background-position: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BehindPicture = styled.div`
  width: 250px;
  height: 250px;
  background: green;
  border-radius: 6px;
  position: absolute;
  background: #342e2e;
  margin-left: 20px;
  margin-top: 20px;
`;
