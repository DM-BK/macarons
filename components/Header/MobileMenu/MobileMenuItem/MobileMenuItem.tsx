import React from 'react';
import {ListItemText, ListItem, Button, variantButton} from "@common";

interface SideMenuItemProps {
    label: string
    path: string
}

export const SideMenuItem = ({label, path}: SideMenuItemProps) => {
    return (
        <ListItem>
            <Button href={path} variant={variantButton.text} fullWidth>
                <ListItemText>{label}</ListItemText>
            </Button>
        </ListItem>
    );
};