import React from 'react';
import Image from 'next/image'
import {Typography} from "@mui/material";

import {
    CustomFooter,
    FooterContainer,
    LeftSideBox,
    RightSideBox,
    SocialLinkCircleBox,
    SocialLinkWrapper
} from "./FooterStyles";

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <CustomFooter>
            <FooterContainer maxWidth={'lg'}>
                <LeftSideBox>
                    <Image src={'/logoWhite.svg'} alt={'bazar logo'} width={98.8} height={28}/>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi illo impedit in
                        molestias nihil nulla praesentium repudiandae sed, voluptatem!</Typography>
                    <SocialLinkWrapper>
                        <SocialLinkCircleBox><FacebookIcon fontSize={'small'}
                                                           color={'secondary'}/></SocialLinkCircleBox>
                        <SocialLinkCircleBox><GoogleIcon fontSize={'small'} color={'secondary'}/></SocialLinkCircleBox>
                        <SocialLinkCircleBox><InstagramIcon fontSize={'small'}
                                                            color={'secondary'}/></SocialLinkCircleBox>
                    </SocialLinkWrapper>
                </LeftSideBox>
                <RightSideBox>
                    <Typography>Home</Typography>
                    <Typography>Products</Typography>
                    <Typography>How buy</Typography>
                    <Typography>About us</Typography>
                </RightSideBox>
            </FooterContainer>
        </CustomFooter>
    );
};

export default Footer;
