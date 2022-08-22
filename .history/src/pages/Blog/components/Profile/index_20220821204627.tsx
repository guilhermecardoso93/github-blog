import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faGroupArrowsRotate,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { ExternalLinkContainer } from "../../../../components/ExternalLink/styles";
import { api } from "../../../../lib/axios";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`users/${username}`);
      setProfileData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData
  }, [])

  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/guilhermecardoso93.png" />
      <ProfileDetails>
        <header>
          <h1>Guilherme Cardoso</h1>
          <ExternalLinkContainer href="#">github</ExternalLinkContainer>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          placeat pariatur molestiae dolorem impedit dignissimos reprehenderit
          mollitia error totam, cum illum ea autem fugiat atque minima quod
          commodi itaque velit?
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            guilhermecardoso93
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Barcelos
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
