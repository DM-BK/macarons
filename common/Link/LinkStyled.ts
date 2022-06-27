import { styled } from '@mui/material/styles';

import { LinkProps } from './Link';

export enum LinkColor {
  primary = 'primary',
  secondary = 'secondary',
}

export const LinkStyled = styled('a')<LinkProps>(({color, theme}: any) => ({
  color: color === LinkColor.primary ? '#4BB4B4' : 'white',//theme?.palette?.primary

  ':hover': {
    textDecoration: 'underline',
  }
}));