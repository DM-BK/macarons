import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import {List, ListItem, Drawer} from "@common";
import {SideMenuItem} from "@components/Header/SideMenu/SideMenuItem";

import * as styles from './SideMenuStyles'

interface SideMenuProps {
    open: boolean
    handleClose: () => void
}

const labels = ['Home', 'Products', 'How buy', 'About us']

export const SideMenu = ({open, handleClose}: SideMenuProps) => {
    return (
        <Drawer sx={styles.Drawer} anchor={'right'} open={open} onClose={handleClose}>
            <List>
                <ListItem sx={styles.CloseIcon}>
                    <CloseIcon onClick={handleClose}/>
                </ListItem>
                {labels.map(label => (
                    <SideMenuItem key={label} label={label}/>
                ))}
            </List>
        </Drawer>
    );
};
