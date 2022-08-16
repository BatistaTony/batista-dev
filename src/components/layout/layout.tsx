import React from "react";
import Networks from "../section/Networks";
import Logo from "../ui/Logo";
import MenuHumburguer from "../ui/MenuHamburguer";
import { LayoutContainer } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <div className="navbar">
        <Logo />
        <MenuHumburguer />
      </div>
      <div className="left-side-bar" />
      <div className="content">{children}</div>
      <div className="right-side-bar">
        <Networks />
      </div>
    </LayoutContainer>
  );
};