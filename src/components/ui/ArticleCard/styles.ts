import styled from "styled-components";

export const ArticleCardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bg};
  height: auto;
  /* min-height: 270px; */
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  position: relative;
  cursor: pointer;
`;

export const ArticleCardTopBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #d90d32;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ArticleCardHeader = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ArticleCardTitle = styled.h1`
  color: #f2e6d8;
`;

export const ArticleCardDate = styled.p`
  color: #f2e6d8;

  @media (max-width: 1000px) {
    margin-top: 5px;
  }
`;

export const ArticleCardText = styled.p`
  color: #f2e6d8;
  margin-top: 15px;
  font-size: 1.2rem;
`;

export const ArticleCardFooter = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* position: absolute;
  bottom: 10px; */

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .btn-read-external-link {
    text-decoration: none;
    background: white;
    height: 30px;
    width: 30px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    @media (max-width: 800px) {
      margin-top: 15px;
    }
  }
`;

export const ArticleCardTopics = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
`;

export const ArticleCardTopicsItem = styled.li`
  height: 30px;
  width: auto;
  background: #1b65a6;
  color: #f2e6d8;
  margin-right: 10px;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ArticleReadingTime = styled.p`
  min-width: 80px;
  width: auto;
  height: 30px;
  background: #d90d32;
  border-radius: 5px;
  border-radius: 5px;
  display: flex;
  font-size: 0.8rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;
  color: #f2e6d8;

  @media (max-width: 800px) {
    margin-top: 15px;
  }

  svg {
    margin-right: 5px;
  }
`;
