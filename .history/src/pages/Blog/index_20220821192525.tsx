import { useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";


interface IPost {
  title: string
}

export function Blog() {
  const [posts, setPots] = useState<IPost[]>([])

  return (
    <>
      <Profile/>
      <SearchInput/>
      <PostListContainer>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </PostListContainer>
    </>
  )
}