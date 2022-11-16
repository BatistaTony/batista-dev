import styled from "styled-components";

export const ArticleCardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bg};
  height: auto;
  max-height: 270px;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  padding-bottom: 10px;
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
`;

export const ArticleCardTitle = styled.h1`
  color: #f2e6d8;
`;

export const ArticleCardDate = styled.p`
  color: #f2e6d8;
`;

export const ArticleCardText = styled.p`
  color: #f2e6d8;
  margin-top: 15px;
  font-size: 1.2rem;
`;

export const ArticleCardFooter = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
  }
`;

export const ArticleCardTopics = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
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
`;

export const ArticleReadingTime = styled.p`
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
  padding: 0 8px 0 8px;
  color: #f2e6d8;

  svg {
    margin-right: 5px;
  }
`;
