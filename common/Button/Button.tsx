import {ButtonProps} from '@mui/material/Button';

import {ButtonStyled} from "./ButtonStyled";

export enum variantButton {
  contained = 'contained',
  text = 'text',
  outlined = 'outlined',
}

export const Button = ({children, disabled, onClick, variant = variantButton.contained, color, sx, href, fullWidth}: ButtonProps) => {

  return (
    <ButtonStyled fullWidth={fullWidth} disabled={disabled} href={href} onClick={onClick} variant={variant} color={color} sx={sx}>
      {children}
    </ButtonStyled>
  );
};