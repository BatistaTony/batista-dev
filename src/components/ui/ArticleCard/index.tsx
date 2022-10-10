import {
  ArticleCardContainer,
  ArticleCardDate,
  ArticleCardFooter,
  ArticleCardHeader,
  ArticleCardText,
  ArticleCardTitle,
  ArticleCardTopBar,
  ArticleCardTopics,
  ArticleCardTopicsItem,
  ArticleReadingTime,
} from "./styles";
import React from "react";
import { TbClock } from "react-icons/tb";
import { Post } from "../../../typescript/types";

interface ArticleCardProps {
  post: Post;
}

const ArticleCard = ({ post }: ArticleCardProps) => {
  return (
    <ArticleCardContainer id="article-card">
      <ArticleCardTopBar />
      <ArticleCardHeader>
        <ArticleCardTitle>{post.title}</ArticleCardTitle>
        <ArticleCardDate>12 de Juno de 2022</ArticleCardDate>
      </ArticleCardHeader>

      <ArticleCardText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
        aspernatur nemo itaque consequuntur perferendis optio reprehenderit
        eligendi? Nobis impedit, totam eaque quia explicabo blanditiis dolor
        voluptas sint corrupti neque eius. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quam aspernatur nemo itaque consequuntur
        perferendis optio reprehenderit eligendi? Nobis impedit, totam eaque
        quia explicabo blanditiis dolor voluptas sint corrupti neque eius.
      </ArticleCardText>

      <ArticleCardFooter>
        <ArticleCardTopics>
          {post.topics.map((topic) => (
            <ArticleCardTopicsItem key={topic}>{topic}</ArticleCardTopicsItem>
          ))}
        </ArticleCardTopics>
        <ArticleReadingTime>
          <TbClock /> 10 min
        </ArticleReadingTime>
      </ArticleCardFooter>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
