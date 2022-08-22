import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { IPost } from "../../../Blog";
import { PostHeaderContainer } from "./styles";

interface PostHeaderProps {
  postData: IPost;
}

export function PostHeader({ postData }: PostHeaderProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
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
