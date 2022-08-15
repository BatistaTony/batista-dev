import React from "react";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import gql from "graphql";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api-us-east-1.hygraph.com/v2/cl4t44oso2vrf01yy0q3l12rj/master",
});

export const Blog = () => {
  return <div>testing the hygraph data for my blog posts</div>;
};
