import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink text="Voltar" href="#" />
        <ExternalLink text="Ver no GitHub" href="#" target="_blank" />
      </header>

      <h1>Javascript sdkfslkdfnhklsndflks</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          guilhermecardoso93
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          há um dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          comentários
        </li>
      </ul>
    </PostHeaderContainer>
  );
}
