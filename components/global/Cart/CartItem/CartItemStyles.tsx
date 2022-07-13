import {SxProps} from '@mui/material/styles'

export const CartItem: SxProps = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    p: '16px 20px',
    borderBottom: 1,
    borderColor: 'rgb(243, 245, 249)'
}

export const Image: SxProps = {
    m: '0 16px',
    display: 'flex',
    alignItems: 'center'
}

export const TextBox: SxProps = {
    flex: '1 1 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    ml :1,
}

export const Label: SxProps = {
    fontSize: '14px',
    fontWeight: 500,
    color: 'rgb(43, 52, 69)'
}

export const Quantity: SxProps = {
    color: 'rgb(125, 135, 156)',
    fontSize: '10px'
}

export const TotalPrice: SxProps = {
    color: 'primary.main',
    fontSize: '14px',
    fontWeight: 500
}