import React from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'

type SideMenuItem = {
    label: string
}

const SideMenuItem = ({label}: SideMenuItem) => {
    return (
        <ListItem>
            <ListItemText>{label}</ListItemText>
        </ListItem>
    );
};

export default SideMenuItem;