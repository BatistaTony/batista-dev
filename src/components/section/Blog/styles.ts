import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
`;

export const BlogTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 30px;
`;

export const PostList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  #article-card {
    margin-bottom: 30px;
  }
`;
