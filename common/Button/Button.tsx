import {ButtonProps} from '@mui/material/Button';

import {ButtonStyled} from "./ButtonStyled";

export const Button = ({children, onClick, variant = 'contained', color, sx}: ButtonProps) => {

    return (
        <ButtonStyled onClick={onClick} variant={variant} color={color} sx={sx}>
            {children}
        </ButtonStyled>
    );
};