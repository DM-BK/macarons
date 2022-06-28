import React from 'react';
import MuiListItemButton, {ListItemButtonProps} from '@mui/material/ListItemButton'

export const ListItemButton = ({children, sx}: ListItemButtonProps) => {
    return (
        <MuiListItemButton sx={sx}>
            {children}
        </MuiListItemButton>
    );
};