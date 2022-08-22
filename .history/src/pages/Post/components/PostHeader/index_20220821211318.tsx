import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { relativeDateFormatter } from "../../../../utils/formater";
import { IPost } from "../../../Blog";
import { PostHeaderContainer } from "./styles";

interface PostHeaderProps {
  postData: IPost;
}

export function PostHeader({ postData }: PostHeaderProps) {
  const navigate = useNavigate();
  const formattedDate = relativeDateFormatter(postData.created_at);

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

      <h1>{postData.title}</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {postData.user.login}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          {formattedDate}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {postData.comments} comentários
        </li>
      </ul>
    </PostHeaderContainer>
  );
}
