import React from 'react';
import MuiToolbar, {ToolbarProps} from '@mui/material/Toolbar'

export const Toolbar = ({children}: ToolbarProps) => {
    return (
        <MuiToolbar>
            {children}
        </MuiToolbar>
    );
};