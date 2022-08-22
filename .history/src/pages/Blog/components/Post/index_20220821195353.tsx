import { IPost } from "../..";
import { PostContainer } from "./styles";

interface PostProps {
  post: IPost
}

export function Post() {
  return(
    <PostContainer to ='/post/1'>
      <div>
        <strong>ReactJs Projeto Rocketseat</strong>
        <span>1 dia atrás</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa necessitatibus velit cum temporibus veniam? Dolorum inventore eos itaque beatae, excepturi nesciunt sapiente delectus officiis! Illo, autem. Culpa, earum suscipit.
      </p>
    </PostContainer>
  )
}