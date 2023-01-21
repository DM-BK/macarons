import React, { ReactNode } from 'react';

import MuiListItem from '@mui/material/ListItem';
import { SxProps, Theme } from '@mui/material';

interface ListItemProps {
    children: ReactNode,
    sx?: SxProps<Theme>,
}

export const ListItem = ({children, sx}: ListItemProps) => {
    return (
        <MuiListItem sx={sx}>
            {children}
        </MuiListItem>
    );
};
