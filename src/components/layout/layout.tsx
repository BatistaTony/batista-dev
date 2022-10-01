import React, { useEffect } from "react";
import { Navbar } from "../section/Navbar";
import Networks from "../section/Networks";
import Logo from "../ui/Logo";
import MenuHumburguer from "../ui/MenuHamburguer";
import { LayoutContainer, SiderBarLeft, ButtonBarIndicator } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        ((document as unknown) as any).getElementById("navbar").style.top = "0";
      } else {
        ((document as unknown) as any).getElementById("navbar").style.top =
          "-100px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <LayoutContainer>
      <div className="navbar" id="navbar">
        <Navbar />
      </div>
      <div className="left-side-bar">
        {/* <SiderBarLeft></SiderBarLeft> */}
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
