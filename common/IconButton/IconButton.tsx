import React from 'react';
import MuiIconButton, {IconButtonProps} from '@mui/material/IconButton'

export const IconButton = ({children, sx, color, onClick, size}: IconButtonProps) => {
    return (
        <MuiIconButton sx={sx} color={color} onClick={onClick} size={size}>
            {children}
        </MuiIconButton>
    );
};
