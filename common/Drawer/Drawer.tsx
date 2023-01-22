import React, { ReactNode } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { SxProps, Theme } from '@mui/material';

interface DrawerProps {
    children: ReactNode;
    sx?: SxProps<Theme>;
    anchor?: "bottom" | "left" | "right" | "top";
    open?: boolean;
    onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export const Drawer = ({children, anchor, open, onClose, sx}: DrawerProps) => {
    return (
        <MuiDrawer sx={sx} anchor={anchor} open={open} onClose={onClose}>
            {children}
        </MuiDrawer>
    );
};