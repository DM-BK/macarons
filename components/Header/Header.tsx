import React, {useEffect, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import {Container, Box, Link, Image, AppBar, Toolbar} from "@common";
import {SideMenu} from "@components/Header/SideMenu";

import * as styles from "./HeaderStyles";
import { headerRoutes } from './routes';

export const Header = () => {
    const [isAnimate, setIsAnimate] = useState(false)

    const handleScroll = () => setIsAnimate(window.scrollY > 40)

    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AppBar sx={styles.getAppBar(isAnimate)} color={'secondary'}>
            <Toolbar>
                <Container sx={styles.HeaderContainer} maxWidth={'lg'}>
                    <Image src={'/logo.svg'} alt="bazar logo" width={98.8} height={28}/>
                    <Box sx={styles.getLinksBox}>
                        {headerRoutes.map(route => (
                            <Link href={route.path}>{route.label}</Link>
                        ))}
                    </Box>
                    <Box sx={styles.getBurgerBox} onClick={handleOpen}>
                        <MenuIcon/>
                    </Box>
                    <SideMenu open={open} handleClose={handleClose}/>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
