import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import {BurgerBox, CustomAppBar, HeaderContainer, LinksBox} from "./HeaderStyles";
import SideMenu from "./sideMenu/SideMenu";

import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";

const Header = () => {
    const [scrollY, setScrollY] = useState(0)
    const isAnimate = scrollY > 40
    const handleScroll = () => setScrollY(window.scrollY)

    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <CustomAppBar isAnimate={isAnimate} color={'secondary'}>
            <Toolbar>
                <HeaderContainer maxWidth={'lg'}>
                    <Image src={'/logo.svg'} alt="bazar logo" width={98.8} height={28}/>
                    <LinksBox>
                        <Typography>Home</Typography>
                        <Typography>Products</Typography>
                        <Typography>How buy</Typography>
                        <Typography>About us</Typography>
                    </LinksBox>
                    <BurgerBox onClick={handleOpen}>
                        <MenuIcon/>
                    </BurgerBox>
                    <SideMenu open={open} handleClose={handleClose}/>
                </HeaderContainer>
            </Toolbar>
        </CustomAppBar>
    );
};

export default Header;
