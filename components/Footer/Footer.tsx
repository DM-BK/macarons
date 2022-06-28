import React from 'react';

import IconButton from '@mui/material/IconButton'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import {Box, Container, Link, Typography, Image} from '@common'
import {LinkColor} from "@common/Link/LinkStyled";

import * as styles from "./FooterStyles";


export const Footer = () => {

    return (
        <Box component={'div'} sx={styles.Footer}>
            <Container maxWidth={'lg'}>
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
                        <Link href={'/'} color={LinkColor.secondary}>Home</Link>
                        <Link href={'/products'} color={LinkColor.secondary}>Products</Link>
                        <Link href={'/how-buy'} color={LinkColor.secondary}>How buy</Link>
                        <Link href={'/about'} color={LinkColor.secondary}>About us</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
