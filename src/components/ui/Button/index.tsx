import React from "react";
import { CustomButtonStyled } from "./styles";

interface CustomButtonProps {
  children: React.ReactNode;
}

export const CustomButton = ({ children }: CustomButtonProps) => {
  return (
    <CustomButtonStyled>
      <a className="btnfos btnfos-1">
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        {children}
      </a>
    </CustomButtonStyled>
  );
};
