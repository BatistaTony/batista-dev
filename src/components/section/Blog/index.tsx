import React, { useState } from "react";
import { Post } from "../../../typescript/types";
import ArticleCard from "../../ui/ArticleCard";
import { BlogContainer, BlogTitle, PostList } from "./styles";

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "353k5h4kjg",
      author: "Batista Tone",
      content: "",
      date: new Date(),
      title: "React for mobile applications",
      topics: ["React", "Android", "ios", "redux", "context api"],
    },
  ]);

  return (
    <BlogContainer>
      <BlogTitle>my posts</BlogTitle>

      <PostList>
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </PostList>
    </BlogContainer>
  );
};
