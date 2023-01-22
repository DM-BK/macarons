import React, { ElementType, ReactNode } from 'react';
import MuiListItemButton from '@mui/material/ListItemButton'
import { SxProps, Theme } from '@mui/material';

interface ListItemButtonProps {
    children: ReactNode,
    sx?: SxProps<Theme>,
    component?: ReactNode,
}

export const ListItemButton = ({children, sx, component}: ListItemButtonProps) => {
    return (
        <MuiListItemButton sx={sx}>
            {children}
        </MuiListItemButton>
    );
};