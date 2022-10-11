import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.primaryWhite};
    margin-bottom: 20px;
  }
`;
