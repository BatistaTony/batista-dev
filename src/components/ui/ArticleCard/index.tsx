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
import { GiWorld } from "react-icons/gi";

interface ArticleCardProps {
  post: Post;
}

const ArticleCard = ({ post }: ArticleCardProps) => {
  return (
    <ArticleCardContainer id="article-card">
      <ArticleCardTopBar />
      <ArticleCardHeader>
        <ArticleCardTitle>{post.title}</ArticleCardTitle>
        <ArticleCardDate>{post.date as string}</ArticleCardDate>
      </ArticleCardHeader>

      <ArticleCardText>{post.content as any}</ArticleCardText>

      <ArticleCardFooter>
        <ArticleCardTopics>
          {post.topics.map((topic) => (
            <ArticleCardTopicsItem key={topic}>{topic}</ArticleCardTopicsItem>
          ))}
        </ArticleCardTopics>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ArticleReadingTime>
            <TbClock /> {post.readingTime}
          </ArticleReadingTime>

          <a
            href={post.url}
            target="_blank"
            className="btn-read-external-link"
            rel="noreferrer"
          >
            <GiWorld />
          </a>
        </div>
      </ArticleCardFooter>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
