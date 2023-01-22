import { SxProps } from '@mui/material/styles'

export const Container: SxProps = {
  display: {
    xs: 'flex',
    md: 'none',
  },
  width: '100%',
  justifyContent: 'center',
  background: '#fff',

  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  boxShadow: '0px 1px 4px 3px rgb(0 0 0 / 10%)',
  zIndex: 999,
}

export const Navigation: SxProps = {
  width: '375px',
}
