import styled from "styled-components";

export const ExperienceHistoryContainer = styled.div`
  width: 100%;
`;

export const ExperienceHistoryContainerContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100px auto;
`;

export const ExperienceTitle = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 20px;
`;

export const ExperienceYears = styled.div`
  width: 100%;
  height: auto;

  .years-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
  }

  .sept-brdr {
    width: 5px;
    background: #097392;
    position: absolute;
    z-index: 1;
    height: 100%;
    margin-left: 7px;
  }
`;

interface ExperienceYearsItemProps {
  isActive: boolean;
}

export const ExperienceYearsItem = styled.div<ExperienceYearsItemProps>`
  width: 100%;
  height: 25px;
  background-color: ${({ isActive }) => (isActive ? "#83b4b3" : "#383838")};
  font-size: 1.1rem;
  color: ${({ isActive, theme }) =>
    isActive ? "" : theme.colors.primaryWhite};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  box-sizing: border-box;
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 5px;

  &:hover {
    background: #83b4b3;
  }
`;

export const ExperienceContent = styled.div`
  margin-left: 50px;
`;

export const ExperienceCompanyName = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primaryWhite};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryWhite};
  }
`;

export const ExperienceCompanyTime = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primaryWhite};
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const ExperienceDescription = styled.div`
  margin-top: 10px;
`;

export const ExperienceDescriptionItem = styled.div`
  display: grid;
  grid-template-columns: 10px auto;
  margin-bottom: 10px;
  border-left: 2px solid ${(props) => props.theme.colors.primaryWhite};
  padding-left: 5px;

  .item-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primaryWhite};
    margin-right: 10px;
    margin-top: 5px;
  }

  p {
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.primaryWhite};
    margin-left: 5px;
    width: 70%;
  }
`;
