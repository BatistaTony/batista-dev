import styled from "styled-components";

export const ExperienceHistoryContainer = styled.div`
  width: 100%;
`;

export const ExperienceHistoryContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ExperienceTitle = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 20px;
`;

export const ExperienceYears = styled.div`
  width: 100%;
  height: auto;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .years-list {
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

interface ExperienceYearsItemProps {
  isActive: boolean;
}

export const ExperienceYearsItem = styled.div<ExperienceYearsItemProps>`
  width: 100px;
  height: 25px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primaryWhite : "transparent"};
  font-size: 1.1rem;
  color: ${({ isActive, theme }) =>
    isActive ? "" : theme.colors.primaryWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 10px;
  position: relative;

  &:hover {
    background: ${(props) => props.theme.colors.primaryWhite};
    color: #000;
  }

  .arrow-year {
    width: 50px;
    height: 7px;
    background: ${(props) => props.theme.colors.primaryWhite};
    position: absolute;
    left: -33px;
    border-radius: 5px;
  }
`;

export const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 15px auto 15px;
  margin-bottom: 50px;
  background: #1e1d40;
  padding: 10px;
  padding-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 0 5px;

  .time-content {
    margin-left: 10px;
  }

  .time-line-right {
    grid-template-rows: 2% 96% 2%;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0px;

    .time-line-start-dot,
    .time-line-end-dot {
      width: 15px;
      height: 7px;
      border-radius: 0px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    .time-line-end-dot {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 8px;
    }

    .time-line-line {
      height: 100%;
      width: 7px;
      margin-top: 0px;
      margin-bottom: 0px;
      justify-self: flex-end;
      border-radius: 0px;
    }
  }
`;

export const HistoryTimeLine = styled.div`
  height: 105%;
  display: grid;
  grid-template-rows: 20px 90% 20px;
  justify-content: center;
  align-items: center;
  padding-top: 5px;

  .time-line-start-dot,
  .time-line-end-dot {
    width: 10px;
    height: 10px;
    background: ${(props) => props.theme.colors.primaryWhite};
    border-radius: 10px;
  }

  .time-line-line {
    width: 3px;
    height: 95%;
    background: ${(props) => props.theme.colors.primaryWhite};
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    justify-self: center;
  }
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
  margin-top: 15px;
`;

export const ExperienceDescriptionItem = styled.div`
  display: grid;
  grid-template-columns: 10px auto;
  margin-bottom: 10px;

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
