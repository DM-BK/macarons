import { ReactNode } from "react";
import NextLink from 'next/link';

import { LinkStyled, LinkColor } from './LinkStyled';

export interface LinkProps {
  href?: string;
  children: ReactNode;
  color?: LinkColor.primary | LinkColor.secondary
  className?: any;
  download?: boolean;
  target?: string;
}

export const Link =  ({href = '', children, color = LinkColor.primary, className, download, target}: LinkProps) => (
  <NextLink href={href} passHref>
    <LinkStyled className={className} download={download} target={target} color={color}>
      {children}
    </LinkStyled>
  </NextLink>
);