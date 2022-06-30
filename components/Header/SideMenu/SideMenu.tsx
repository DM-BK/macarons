import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import {List, ListItem, Drawer} from "@common";
import {SideMenuItem} from "@components/Header/SideMenu/SideMenuItem";

import * as styles from './SideMenuStyles'
import { headerRoutes } from '../routes';

interface SideMenuProps {
    open: boolean
    handleClose: () => void
}

export const SideMenu = ({open, handleClose}: SideMenuProps) => {
    return (
        <Drawer sx={styles.Drawer} anchor={'right'} open={open} onClose={handleClose}>
            <List>
                <ListItem sx={styles.CloseIcon}>
                    <CloseIcon onClick={handleClose}/>
                </ListItem>
                {headerRoutes.map((route) => (
                    <SideMenuItem key={route.label} label={route.label} path={route.path} />
                ))}
            </List>
        </Drawer>
    );
};
