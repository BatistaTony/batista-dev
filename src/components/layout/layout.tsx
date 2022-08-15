import React from "react";
import Networks from "../section/Networks";
import { LayoutContainer } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <div className="navbar"></div>
      <div className="left-side-bar" />
      <div className="content">{children}</div>
      <div className="right-side-bar">
        <Networks />
      </div>
    </LayoutContainer>
  );
};
