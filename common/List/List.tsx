import React from 'react';
import MuiList, {ListProps} from '@mui/material/List'

export const List = ({children, sx}: ListProps) => {
    return (
        <MuiList sx={sx}>
            {children}
        </MuiList>
    );
};