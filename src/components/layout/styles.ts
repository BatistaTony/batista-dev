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
    background: transparent;
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
    box-sizing: border-box;
    padding: 100px;
    padding-left: 200px;
    padding-right: 200px;
    padding-bottom: 30px;
    /* overflow: auto; */

    /* &::-webkit-scrollbar {
      background-color: transparent;
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.primaryWhite};
      border-radius: 10px;
    } */
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
  border-radius: 5px;
`;

export const ButtonBarIndicator = styled.div`
  width: 1px;
  height: 200px;
  margin-top: 40px;
  background: ${(props) => props.theme.colors.primaryWhite};
`;
