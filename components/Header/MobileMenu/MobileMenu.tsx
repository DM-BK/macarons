import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import {List, ListItem, Drawer, Box} from "@common";
import {SideMenuItem} from "@components/Header/MobileMenu/MobileMenuItem";

import { headerRoutes } from '../routes';

import * as styles from './MobileMenuStyles'

export const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter()

    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        setOpen(false)
    }, [router.pathname])

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
