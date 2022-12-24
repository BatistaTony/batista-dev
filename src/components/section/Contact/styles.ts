import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .networks-c {
    width: 400px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      width: 80%;
    }
  }
`;

export const ContactMessage = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 20px;
  width: 100%;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const ContactEmail = styled.a`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ContactPhome = styled(ContactEmail)``;
