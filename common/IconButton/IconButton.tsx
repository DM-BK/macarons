import React from 'react';
import MuiIconButton, {IconButtonProps} from '@mui/material/IconButton'

export const IconButton = ({children, sx}: IconButtonProps) => {
    return (
        <MuiIconButton sx={sx}>
            {children}
        </MuiIconButton>
    );
};