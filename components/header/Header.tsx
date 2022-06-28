import React, {useEffect, useState} from 'react';
import {
    getAppBarStyles,
    getBurgerBoxStyles,
    getLinksBoxStyles,
    HeaderContainerStyles,
} from "./HeaderStyles";
import SideMenu from "./sideMenu/SideMenu";
import {Container, Box, Link, Image, AppBar, Toolbar} from "@common";

import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
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
        <AppBar sx={getAppBarStyles(isAnimate)} color={'secondary'}>
            <Toolbar>
                <Container sx={HeaderContainerStyles} maxWidth={'lg'}>
                    <Image src={'/logo.svg'} alt="bazar logo" width={98.8} height={28}/>
                    <Box sx={getLinksBoxStyles}>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/products'}>Products</Link>
                        <Link href={'/how-buy'}>How buy</Link>
                        <Link href={'/about'}>About us</Link>
                    </Box>
                    <Box sx={getBurgerBoxStyles} onClick={handleOpen}>
                        <MenuIcon/>
                    </Box>
                    <SideMenu open={open} handleClose={handleClose}/>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
