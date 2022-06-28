import { ReactNode } from "react";
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { ButtonStyled } from "./ButtonStyled";

export interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
}

export const Button = ({children, onClick}: ButtonProps) => {

  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};