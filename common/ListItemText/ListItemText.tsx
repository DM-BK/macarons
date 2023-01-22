import React, { ReactNode } from 'react';
import MuiListItemText from '@mui/material/ListItemText'
import { SxProps, Theme } from '@mui/material';

interface ListItemTextProps {
    children: ReactNode,
    sx?: SxProps<Theme>,
}

export const ListItemText = ({children, sx}: ListItemTextProps) => {
    return (
        <MuiListItemText sx={sx}>
            {children}
        </MuiListItemText>
    );
};