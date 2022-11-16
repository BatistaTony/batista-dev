import React, { useState } from "react";
import { Post } from "../../../typescript/types";
import ArticleCard from "../../ui/ArticleCard";
import { BlogContainer, BlogTitle, PostList } from "./styles";
import { posts as postsData } from "./../../../static-data/posts";

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>(postsData);

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
