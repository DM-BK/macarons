import React from 'react';
import MuiAppBar, {AppBarProps} from '@mui/material/AppBar'

export const AppBar = ({children, sx, color}: AppBarProps) => {
    return (
        <MuiAppBar sx={sx} color={color}>
            {children}
        </MuiAppBar>
    );
};