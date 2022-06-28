import React from 'react';
import {ListItemText, ListItem} from "@common";

interface SideMenuItemProps {
    label: string
}

const SideMenuItem = ({label}: SideMenuItemProps) => {
    return (
        <ListItem>
            <ListItemText>{label}</ListItemText>
        </ListItem>
    );
};

export default SideMenuItem;