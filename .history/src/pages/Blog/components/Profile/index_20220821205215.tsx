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

      const response = await api.get(`/users/guilhermecardoso93}`);
      setProfileData(response.data);
      console.log(response.data)

    } finally {
      setIsLoading(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData
  }, [])

  return (
    <ProfileContainer>
      <ProfilePicture src={profileData.avatar_url} />
      <ProfileDetails>
        <header>
          <h1>{profileData.name}</h1>
          <ExternalLinkContainer href={profileData.html_url}>github</ExternalLinkContainer>
        </header>
        <p>
          {profileData.bio}
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {profileData.login}
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            {profileData.company}
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {profileData.followers}
            seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
