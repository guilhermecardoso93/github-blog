import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";

export function PostHeader() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          text="Voltar"
          onClick={goBack}
          as="button"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant="iconLeft"
        />
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
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  );
}
