import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPots] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );

        setPots(response.data.items);
      } finally {
        setIsLoading(false)
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput />
      <PostListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostListContainer>
    </>
  );
}
