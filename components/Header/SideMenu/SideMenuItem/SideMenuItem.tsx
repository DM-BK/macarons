import React from 'react';
import {ListItemText, ListItem, Link} from "@common";

interface SideMenuItemProps {
    label: string
    path: string
}

export const SideMenuItem = ({label, path}: SideMenuItemProps) => {
    return (
        <ListItem>
            <Link href={path}>
                <ListItemText>{label}</ListItemText>
            </Link>
        </ListItem>
    );
};