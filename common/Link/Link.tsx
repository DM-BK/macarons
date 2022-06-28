import { FC, ReactNode } from "react";
import NextLink from 'next/link'
import { LinkStyled, LinkColor } from './LinkStyled'

export interface LinkProps {
  href?: string;
  children: ReactNode;
  color?: LinkColor
  className?: any;
  download?: boolean;
  target?: string;
}

export const Link: FC<LinkProps> =  ({href = '', children, color = LinkColor.primary, className, download, target}) => (
  <NextLink href={href} passHref>
    <LinkStyled className={className} download={download} target={target} color={color}>
      {children}
    </LinkStyled>
  </NextLink>
);