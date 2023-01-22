import React, { ReactNode } from 'react';

import MuiListItemIcon from '@mui/material/ListItemIcon';
import { SxProps, Theme } from '@mui/material';

interface ListItemIconProps {
    children: ReactNode,
    sx?: SxProps<Theme>,
}

export const ListItemIcon = ({children, sx}: ListItemIconProps) => {
    return (
        <MuiListItemIcon sx={sx}>
            {children}
        </MuiListItemIcon>
    );
};
