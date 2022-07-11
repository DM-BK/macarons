import {SxProps} from '@mui/material/styles'

export const AddRemove: SxProps = {
    height: '102.2px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    justifyContent: 'flex-end'
}

export const ProductsCount: SxProps = {
    color: 'rgb(43, 52, 69)',
    fontSize: '14px'
}

export const AddRemoveButton: SxProps = {
    height: '30px',
    minWidth: 'unset',
    width: '30px',
    border: '1px solid',
    borderColor: 'primary.main',
    borderRadius: '0',

    '&:hover': {
        color: '#fff',
        background: '#4BB4B4',
        border: '1px solid',
        borderColor: '#4BB4B4'
    }
}

export const Icon: SxProps = {
    pointerEvents: 'none'
}