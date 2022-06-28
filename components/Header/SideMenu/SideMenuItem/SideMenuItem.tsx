import React from 'react';
import {ListItemText, ListItem} from "@common";

interface SideMenuItemProps {
    label: string
}

export const SideMenuItem = ({label}: SideMenuItemProps) => {
    return (
        <ListItem>
            <ListItemText>{label}</ListItemText>
        </ListItem>
    );
};