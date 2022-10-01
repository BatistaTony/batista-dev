import React, { useState } from "react";
import {
  MenuHamburguerContainer,
  MenuContentContainer,
  MenuContentList,
  MenuContentListItem,
} from "./style";

import { useNavigate } from "react-router-dom";

type MENU_ITEMSTYPE = {
  title: string;
  route: string;
};
const MENU_ITEMS: MENU_ITEMSTYPE[] = [
  { title: "Home", route: "" },
  { title: "About", route: "about" },
  { title: "Work Experience", route: "experience" },
  { title: "Projects", route: "projects" },
  { title: "Blog Posts", route: "blog-posts" },
  { title: "Contact", route: "contact" },
];

const MenuHumburguer = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(`/${path.toLowerCase()}`);
  };

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
              <MenuContentListItem
                onClick={() => goTo(item.route)}
                key={item.title}
              >
                {item.title}
              </MenuContentListItem>
            ))}
          </MenuContentList>
        )}
      </MenuContentContainer>
    </>
  );
};

export default MenuHumburguer;
