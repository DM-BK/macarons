import React from 'react';
import MuiList, {ListProps} from '@mui/material/List'

export const List = ({children, sx, subheader}: ListProps) => {
    return (
        <MuiList sx={sx} subheader={subheader}>
            {children}
        </MuiList>
    );
};