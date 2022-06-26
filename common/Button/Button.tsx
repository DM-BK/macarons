import { FC, ReactNode } from "react";
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { ButtonStyled } from "./ButtonStyled";

export interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({children}) => {

  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  );
};