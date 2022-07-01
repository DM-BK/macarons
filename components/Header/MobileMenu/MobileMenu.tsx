import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import {List, ListItem, Drawer, Box} from "@common";
import {SideMenuItem} from "@components/Header/MobileMenu/MobileMenuItem";

import { headerRoutes } from '../routes';

import * as styles from './MobileMenuStyles'

export const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    return (<>
        <Box sx={styles.getBurgerBox} onClick={handleOpen}>
            <MenuIcon/>
        </Box>
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
    </>);
};
