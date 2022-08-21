import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  gap:2rem;
  padding: 2rem 3rem;
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;

  background-color: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0,0,0,0.2);
  border-radius: 10px;
`;

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  background-size: cover;
  object-fit: cover;
`

export const ProfileDetails = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      color: ${({ theme }) => theme.colors["base-title"]};
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
      line-height: 130%;
    }
  }

  ul {
    display: flex;
    align-self: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors["base-label"]};
      }
    }
  }
`