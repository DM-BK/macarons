import React, {useEffect, useState} from 'react';
import {Box, Container, Toolbar, Typography} from '@mui/material'
import Logo from "./logo/Logo";
import {BurgerBox, CustomAppBar, flexCenter, LinksBox} from "./HeaderStyles";
import SideMenu from "./sideMenu/SideMenu";

import MenuIcon from '@mui/icons-material/Menu';


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
        <Box>
            <CustomAppBar isAnimate={isAnimate}>
                <Toolbar>
                    <Container maxWidth={'lg'}
                               sx={flexCenter}>
                        <Logo/>
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
                    </Container>
                </Toolbar>
            </CustomAppBar>
        </Box>
    );
};

export default Header;
