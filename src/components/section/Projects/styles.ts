import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
`;

export const ProjectsContainerTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 20px;
`;

export const ProjectsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 50px;
`;

export const ProjectsCard = styled.div`
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.primaryWhite};
  border-radius: 5px;
  padding: 20px;
  min-height: 200px;
  padding-bottom: 60px;
  box-sizing: border-box;
  margin-right: 30px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
`;

export const ProjectsCardTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const ProjectsCardDescription = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  width: 100%;
  min-height: auto;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  overflow: hidden;
`;

export const ProjectsCardSkillsList = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProjectsCardSkillsListItem = styled.li`
  background-color: #1e1d40;
  font-size: 0.8rem;
  width: auto;
  color: ${(props) => props.theme.colors.primaryWhite};
  padding: 5px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const ProjectsCardFooter = styled.div`
  height: 40px;
  width: 100%;
  background: #4ab0d9;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ProjectsCardLinkList = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding-right: 15px;
`;

export const ProjectsCardLinkListItem = styled.li`
  a {
    width: 25px;
    height: 25px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.primaryWhite};
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
