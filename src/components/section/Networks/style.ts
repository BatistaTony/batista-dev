import styled from "styled-components";

export const NetworksContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NetWorkItem = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.colors.primaryWhite};
  border-radius: 8px;
  margin-bottom: 15px;
  cursor: pointer;
`;
