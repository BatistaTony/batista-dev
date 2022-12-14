import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 80px auto 80px;
  grid-template-rows: 12vh 88vh;

  .footer-component {
    display: none;
  }

  .navbar {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    transition: top 0.3s;
    z-index: 7;
    background: #d90d32;
  }

  .left-side-bar {
    width: 80px;
    height: 100%;
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;

    @media (max-width: 600px) {
      display: none;
    }
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

    @media (max-width: 1300px) {
      padding-left: 100px;
      padding-right: 100px;
    }

    @media (max-width: 1100px) {
      padding-left: 50px;
      padding-right: 50px;
    }

    @media (max-width: 805px) {
      padding-left: 10px;
      padding-right: 10px;
    }

    @media (max-width: 550px) {
      padding-left: 20px;
      padding-right: 20px;
      position: absolute;
      padding-top: 200px;
    }
  }

  .right-side-bar {
    width: 80px;
    height: 100%;
    grid-column: 3/3;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 3;

    @media (max-width: 600px) {
      display: none;
    }
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
