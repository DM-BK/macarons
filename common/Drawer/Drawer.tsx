import React from 'react';
import MuiDrawer, {DrawerProps} from '@mui/material/Drawer'

export const Drawer = ({children, anchor, open, onClose, sx}: DrawerProps) => {
    return (
        <MuiDrawer sx={sx} anchor={anchor} open={open} onClose={onClose}>
            {children}
        </MuiDrawer>
    );
};