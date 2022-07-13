import {SxProps} from '@mui/material/styles'

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