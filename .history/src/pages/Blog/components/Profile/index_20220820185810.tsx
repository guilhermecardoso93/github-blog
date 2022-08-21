import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faGroupArrowsRotate, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLinkContainer } from "../../../../components/ExternalLink/styles";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/guilhermecardoso93.png" />
      <ProfileDetails>
        <header>
          <h1>Guilherme Cardoso</h1>
          <ExternalLinkContainer href="#" >
            github
          </ExternalLinkContainer>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat pariatur molestiae dolorem impedit dignissimos reprehenderit mollitia error totam, cum illum ea autem fugiat atque minima quod commodi itaque velit?
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub}/>
            guilhermecardoso93
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding}/>
            Barcelos
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup}/>
            seguidores
          </li>
          
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
