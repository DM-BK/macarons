import {ButtonProps} from '@mui/material/Button';

import {ButtonStyled} from "./ButtonStyled";

export enum variantButton {
  contained = 'contained',
  text = 'text',
  outlined = 'outlined',
}

export const Button = ({className, children, disabled, onClick, variant = variantButton.contained, color, sx, href, fullWidth, type}: ButtonProps) => {

  return (
    <ButtonStyled className={className} fullWidth={fullWidth} disabled={disabled} href={href} onClick={onClick} variant={variant} color={color} sx={sx} type={type}>
      {children}
    </ButtonStyled>
  );
};