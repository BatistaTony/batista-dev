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
    background-color: black;
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
    background-color: yellow;
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .content {
    width: 100%;
    height: 100%;
    background-color: green;
    grid-column: 2/2;
    grid-row: 2/3;
  }

  .right-side-bar {
    width: 100%;
    height: 100%;
    background-color: red;
    grid-column: 3/3;
    grid-row: 2/3;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;
