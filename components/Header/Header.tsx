import React, {useEffect, useState} from 'react';

import {Container, Image, AppBar, Toolbar} from "@common";
import {MobileMenu} from "@components/Header/MobileMenu";
import { MainMenu } from '@components/global/MainMenu';

import * as styles from "./HeaderStyles";
import { headerRoutes } from './routes';

export const Header = () => {
    const [isAnimate, setIsAnimate] = useState(false)

    const handleScroll = () => setIsAnimate(window.scrollY > 40)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AppBar sx={styles.getAppBar(isAnimate)} color={'secondary'}>
            <Toolbar>
                <Container sx={styles.HeaderContainer} maxWidth={'lg'}>
                    <Image src={'/logo.svg'} alt="bazar logo" width={98.8} height={28} />
                    <MainMenu routes={headerRoutes} sx={styles.getLinksBox} />
                    <MobileMenu />
                </Container>
            </Toolbar>
        </AppBar>
    );
};
