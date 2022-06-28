import React from 'react';
import MuiListItem, {ListItemProps} from '@mui/material/ListItem'

export const ListItem = ({children, sx}: ListItemProps) => {
    return (
        <MuiListItem sx={sx}>
            {children}
        </MuiListItem>
    );
};
