import React, { useState } from "react";
import {
  MenuHamburguerContainer,
  MenuContentContainer,
  MenuContentList,
  MenuContentListItem,
} from "./style";

const MENU_ITEMS = [
  "Home",
  "About",
  "Work Experience",
  "Projects",
  "Blog Posts",
  "Contact",
];

const MenuHumburguer = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <MenuHamburguerContainer onClick={() => setToggle(!toggle)} open={toggle}>
        <div className="line-1" />
        {!toggle && <div className="line-2" />}
        <div className="line-3" />
      </MenuHamburguerContainer>

      <MenuContentContainer isActive={toggle}>
        {toggle && (
          <MenuContentList>
            {MENU_ITEMS.map((item) => (
              <MenuContentListItem key={item}>{item}</MenuContentListItem>
            ))}
          </MenuContentList>
        )}
      </MenuContentContainer>
    </>
  );
};

export default MenuHumburguer;
