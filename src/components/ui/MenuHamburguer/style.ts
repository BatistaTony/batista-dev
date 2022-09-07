import styled from "styled-components";

interface MenuHamburguerContainerProps {
  open: boolean;
}

export const MenuHamburguerContainer = styled.div<MenuHamburguerContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40px;
  height: 30px;
  cursor: pointer;
  z-index: 2;

  .line-1,
  .line-2,
  .line-3 {
    width: 35px;
    height: 5px;
    background: ${(props) => props.theme.colors.primaryWhite};
    transition: transform 0.5s;
  }

  .line-1 {
    transform: ${({ open }) =>
      open ? "rotate(40deg) translate(5px, 5px)" : ""};
  }

  .line-2 {
    width: 30px;
  }

  .line-3 {
    transform: ${({ open }) =>
      open ? "rotate(-40deg) translate(5px, -6px)" : ""};
    width: ${({ open }) => (open ? "35px" : "25px")};
  }
`;

interface MenuContentContainerProps {
  isActive: boolean;
}

export const MenuContentContainer = styled.div<MenuContentContainerProps>`
  width: ${({ isActive }) => (isActive ? "400px" : "0")};
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #83b4b3;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
`;

export const MenuContentList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const MenuContentListItem = styled.li`
  font-weight: 550;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-bottom: 10px;
  cursor: pointer;
`;
