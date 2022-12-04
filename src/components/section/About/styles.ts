import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  box-sizing: border-box;

  @media (max-width: 920px) {
    position: absolute;
    left: 0;
    top: 100px;
    padding: 50px;
    z-index: 5;
  }

  @media (max-width: 600px) {
    padding: 30px;
  }
`;

export const AboutContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto auto;

  @media (max-width: 920px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    align-items: center;
    justify-content: center;
  }
`;

export const AboutInfoContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text1 {
    width: 80%;
  }

  .text2 {
    width: 70%;
  }

  @media (max-width: 920px) {
    .text1,
    .text2 {
      width: 100%;
    }
  }
`;

export const AboutTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 920px) {
    margin-top: 10px;
    font-size: 2rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.primaryWhite};
  width: 95%;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const AboutSkillsContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  grid-column: 1/3;

  @media (max-width: 920px) {
    grid-column: 1;
    width: 100%;
  }
`;

export const SkillItem = styled.div`
  margin-right: 15px;
  background: #1b65a6;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.primaryWhite};

  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }

  i {
    font-size: 0.9rem;
    margin-right: 5px;
  }
`;

export const AboutPictureContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 45px;

  @media (max-width: 920px) {
    grid-row: 1;
    width: 100%;
    height: 150px;
    padding: 0;
    align-self: center;
    justify-self: center;
  }
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

  @media (max-width: 1000px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 920px) {
    width: 120px;
    height: 120px;
    border-radius: 100%;
  }
`;

export const BehindPicture = styled.div`
  width: 280px;
  height: 280px;
  background: transparent;
  border: 2px solid #4ab0d9;
  border-radius: 6px;
  position: absolute;
  margin-left: -15px;
  margin-top: -15px;

  @media (max-width: 1000px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 920px) {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }
`;
