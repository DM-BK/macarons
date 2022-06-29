import { ReactNode } from "react";
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { ButtonStyled } from "./ButtonStyled";

export interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
}

export const Button = ({children, onClick, variant = 'contained', color, sx}: ButtonProps) => {

  return (
    <ButtonStyled onClick={onClick} variant={variant} color={color} sx={sx}>
      {children}
    </ButtonStyled>
  );
};