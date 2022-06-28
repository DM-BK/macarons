import React from 'react';
import MuiListItemText, {ListItemTextProps} from '@mui/material/ListItemText'

export const ListItemText = ({children, sx}: ListItemTextProps) => {
    return (
        <MuiListItemText sx={sx}>
            {children}
        </MuiListItemText>
    );
};