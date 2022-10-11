import styled from "styled-components";

export const NetworksContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NetWorkItem = styled.a`
  text-decoration: none;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.primaryWhite};
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  svg {
    transform: scale(1.6);
    text-decoration: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;
