import React, { useEffect } from "react";
import { Navbar } from "../section/Navbar";
import Networks from "../section/Networks";
import { LayoutContainer, ButtonBarIndicator } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    console.log(prevScrollpos);

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        (document as unknown as any).getElementById("navbar").style.top = "0";
      } else {
        (document as unknown as any).getElementById("navbar").style.top =
          "-100px";
      }

      prevScrollpos = currentScrollPos;
    };

    return () => {
      prevScrollpos = window.pageYOffset;
    };
  }, []);

  return (
    <LayoutContainer>
      <div className="navbar" id="navbar">
        <Navbar />
      </div>
      <div className="left-side-bar">
        <ButtonBarIndicator />
      </div>
      <div className="content">{children}</div>
      <div className="right-side-bar">
        <Networks />
        <ButtonBarIndicator />
      </div>
    </LayoutContainer>
  );
};
