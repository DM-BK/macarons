import { SxProps } from '@mui/material/styles'

export const Title: SxProps = {
  lineHeight: '30px',
  margin: '10px 10px 5px',
  pb: '6px',
  pl: 0,
  borderBottom: '2px dashed #4BB4B4',
  fontWeight: 400,
}

export const List: SxProps = {
  minWidth: '210px',
}

export const Link: SxProps = {
  color: 'rgba(0, 0, 0, 0.6)',
  transition: 'all .3s',

  'svg g path': {
    transition: 'all .3s',
    strokeWidth: '2px',
  },

  '&:hover': {
    bgcolor: 'transparent',
    color: '#4BB4B4',
    textDecoration: 'none',

    '.MuiListItemButton-root': {
      transition: 'all .3s',
      bgcolor: 'rgba(75, 180, 180, .1)',
    },

    '&:not(:last-of-type) svg g path': {
      fill: '#4BB4B4',
    },

    '&:last-of-type svg g path, &:last-of-type svg g line': {
      stroke: '#4BB4B4',
    },
  },
}
