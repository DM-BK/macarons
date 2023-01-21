import React, { ReactNode } from 'react';
import MuiList from '@mui/material/List';
import { SxProps, Theme } from '@mui/material';

interface ListProps {
    children: ReactNode,
    sx?: SxProps<Theme>,
    subheader?: ReactNode,
}

export const List = ({children, sx, subheader}: ListProps) => {
    return (
        <MuiList sx={sx} subheader={subheader}>
            {children}
        </MuiList>
    );
};