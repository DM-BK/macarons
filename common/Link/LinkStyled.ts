import { styled } from '@mui/material/styles'

import { LinkProps } from './Link'

export enum LinkColor {
  primary = 'primary',
  secondary = 'secondary',
}

export const LinkStyled = styled('a', {
  shouldForwardProp: (prop) => prop !== 'withoutStyles',
})<LinkProps>(({ withoutStyles, color, theme }: any) => {
  if (withoutStyles) return {}

  return {
    color:
      color === LinkColor.primary
        ? theme.palette.primary.main
        : theme.palette.secondary.main,

    ':hover': {
      textDecoration: 'underline',
    },
  }
})
