import React from 'react';
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

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