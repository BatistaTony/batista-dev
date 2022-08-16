import React, { useState } from "react";
import { MenuHamburguerContainer } from "./style";

const MenuHumburguer = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <MenuHamburguerContainer onClick={() => setToggle(!toggle)} open={toggle}>
      <div className="line-1" />
      {!toggle && <div className="line-2" />}
      <div className="line-3" />
    </MenuHamburguerContainer>
  );
};

export default MenuHumburguer;
