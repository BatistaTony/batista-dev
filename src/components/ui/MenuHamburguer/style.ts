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

  .line-1,
  .line-2,
  .line-3 {
    width: 35px;
    height: 5px;
    background: white;
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
