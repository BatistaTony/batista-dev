import React from "react";
import { CustomButtonContainer } from "./styles";

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <CustomButtonContainer>
      <button className="btnfos btnfos-1" {...props}>
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        {children}
      </button>
    </CustomButtonContainer>
  );
};
