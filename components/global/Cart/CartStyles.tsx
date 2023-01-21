import {keyframes, SxProps} from '@mui/material/styles'

export const Icon: (isAnimate: boolean) => SxProps = (isAnimate) => ({
    animation: isAnimate ? `${rumble} 0.7s ease` : ''
})

export const IconButton: (isAnimate: boolean) => SxProps = (isAnimate) => ({
    bgcolor: '#F3F5F9',
    animation: isAnimate ? `${buttonAnimation} 1s ease` : ''
})

export const CartDrawer: SxProps = {
    '.MuiDrawer-paper': {
        minWidth: '400px',
        height: '100vh'
    }
}

export const DrawerHeader: SxProps = {
    display: 'flex',
    alignItems: 'center',
    p: '0 20px',
    gap: '5px',
    color: 'rgb(15, 52, 96)',
    height: '74px',
    borderBottom: 1,
    borderColor: 'rgb(243, 245, 249)'
}

export const HeaderIcon: SxProps = {
    color: 'inherit'
}

export const HeaderCloseIcon: SxProps = {
    ml: 'auto'
}

export const HeaderText: SxProps = {
    color: 'inherit'
}

export const EmptyCartBox: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
}

export const EmptyCartText: SxProps = {
    textAlign: 'center',
    mt: 2,
    maxWidth: '200px',
    fontSize: '16px',
    color: 'rgb(125, 135, 156)',
    fontWeight: 300,
    whiteSpace: 'pre',
}

const buttonAnimation = keyframes`
  0%, 50%, 100% {
    transform: translateY(0px);
  }

  20%, 80% {
    transform: translateY(5px);
  }

  40% {
    transform: translateY(-20px);
  }
  
  60% {
    transform: translateY(-5px);
  }
`

const rumble = keyframes`
  100% {
    rotate: 0;
  }

  30%, 50%, 70% {
    rotate: 17deg;
  }

  40%, 60% {
    rotate: -17deg;
  }
`