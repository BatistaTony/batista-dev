import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContactMessage = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 20px;
`;

export const ContactEmail = styled.a`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 20px;
`;

export const ContactPhome = styled(ContactEmail)``;
