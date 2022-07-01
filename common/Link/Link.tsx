import {ReactNode} from "react";
import NextLink from 'next/link';
import {SxProps} from '@mui/material/styles'

import {LinkStyled, LinkColor} from './LinkStyled';

export interface LinkProps {
    href?: string;
    children: ReactNode;
    color?: LinkColor
    className?: any;
    download?: boolean;
    target?: string;
    sx?: SxProps
}

export const Link = ({href = '', children, color = LinkColor.primary, className, download, target, sx = {}}: LinkProps) => (
    <NextLink href={href} passHref>
        <LinkStyled className={className} download={download} target={target} color={color} sx={sx}>
            {children}
        </LinkStyled>
    </NextLink>
);