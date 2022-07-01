import React from 'react';
import MuiIconButton, {IconButtonProps} from '@mui/material/IconButton'

export const IconButton = ({children, sx, color, onClick}: IconButtonProps) => {
    return (
        <MuiIconButton sx={sx} color={color} onClick={onClick}>
            {children}
        </MuiIconButton>
    );
};
