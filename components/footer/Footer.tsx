import React from 'react';

import IconButton from '@mui/material/IconButton'
import {
    FooterContentBoxStyles,
    FooterStyles,
    LeftSideBoxStyles,
    LogoBoxStyles,
    RightSideBoxStyles,
    SocialLinkInnerCircleBoxStyles,
    SocialLinkOuterBoxStyles,
} from "./FooterStyles";
import {Box, Container, Link, Typography, Image} from '@common'

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import {LinkColor} from "@common/Link/LinkStyled";

export const Footer = () => {

    return (
        <Box component={'div'} sx={FooterStyles}>
            <Container maxWidth={'lg'}>
                <Box sx={LogoBoxStyles}>
                    <Image src={'/logoWhite.svg'} alt={'bazar logo'} width={98.8} height={28}/>
                </Box>
                <Box sx={FooterContentBoxStyles}>
                    <Box sx={LeftSideBoxStyles}>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi illo
                            impedit
                            in
                            molestias nihil nulla praesentium repudiandae sed, voluptatem!</Typography>
                        <Box sx={SocialLinkOuterBoxStyles}>
                            <IconButton sx={SocialLinkInnerCircleBoxStyles}>
                                <FacebookIcon fontSize={'small'} color={'secondary'}/>
                            </IconButton>
                            <IconButton sx={SocialLinkInnerCircleBoxStyles}>
                                <GoogleIcon fontSize={'small'} color={'secondary'}/>
                            </IconButton>
                            <IconButton sx={SocialLinkInnerCircleBoxStyles}>
                                <InstagramIcon fontSize={'small'} color={'secondary'}/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={RightSideBoxStyles}>
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
