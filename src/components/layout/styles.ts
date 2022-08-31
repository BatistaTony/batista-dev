import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 80px auto 80px;
  grid-template-rows: 12vh 88vh;

  .navbar {
    width: 100%;
    height: 100%;
    grid-column: 1/4;
    grid-row: 1/2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
  }

  .left-side-bar {
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
  }

  .content {
    width: 100%;
    height: 100%;
    grid-column: 2/2;
    grid-row: 2/3;
  }

  .right-side-bar {
    width: 100%;
    height: 100%;
    grid-column: 3/3;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const SiderBarLeft = styled.div`
  height: 300px;
  width: 10px;
  background: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 40px;
  border-radius: 5px;
`;

export const ButtonBarIndicator = styled.div`
  width: 1px;
  height: 200px;
  background: ${(props) => props.theme.colors.primaryWhite};
`;
