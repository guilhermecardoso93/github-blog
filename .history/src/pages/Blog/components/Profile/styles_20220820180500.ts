import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  gap:2rem;
  padding: 2rem 3rem;
  width: 100%;
  min-height: 13.25rem;

  background-color: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0,0,0,0.2);
  border-radius: 10px;
`;
