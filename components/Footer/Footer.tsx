import React from 'react';

import IconButton from '@mui/material/IconButton'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import {Box, Container, Link, Typography, Image} from '@common'
import {LinkColor} from "@common/Link/LinkStyled";

import * as styles from "./FooterStyles";
import { headerRoutes } from '@components/Header/routes';

export const Footer = () => {
    return (
        <Box component={'div'} sx={styles.Footer}>
            <Container sx={styles.FooterContainer}>
                <Box sx={styles.LogoBox}>
                    <Image src={'/logoWhite.svg'} alt={'bazar logo'} width={98.8} height={28}/>
                </Box>
                <Box sx={styles.FooterContentBox}>
                    <Box sx={styles.LeftSideBox}>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi illo
                            impedit
                            in
                            molestias nihil nulla praesentium repudiandae sed, voluptatem!</Typography>
                        <Box sx={styles.SocialLinkOuterBox}>
                            <IconButton sx={styles.SocialLinkInnerCircleBox}>
                                <FacebookIcon fontSize={'small'} color={'secondary'}/>
                            </IconButton>
                            <IconButton sx={styles.SocialLinkInnerCircleBox}>
                                <GoogleIcon fontSize={'small'} color={'secondary'}/>
                            </IconButton>
                            <IconButton sx={styles.SocialLinkInnerCircleBox}>
                                <InstagramIcon fontSize={'small'} color={'secondary'}/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={styles.RightSideBox}>
                        {headerRoutes.map(route => (
                            <Link key={route.path} href={route.path} color={LinkColor.secondary}>{route.label}</Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
