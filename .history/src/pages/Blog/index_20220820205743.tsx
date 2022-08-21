import { Posto } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";

export function Blog() {
  return (
    <>
      <Profile/>
      <SearchInput/>
      <PostListContainer>
        <Posto/>
      </PostListContainer>
    </>
  )
}