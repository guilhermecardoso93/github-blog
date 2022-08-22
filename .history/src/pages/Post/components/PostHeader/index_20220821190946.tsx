import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink text='Voltar' href='#'/>
        <ExternalLink text='Ver no GitHub' href='#' target='_blank'/>
      </header>
    </PostHeaderContainer>
  )
}