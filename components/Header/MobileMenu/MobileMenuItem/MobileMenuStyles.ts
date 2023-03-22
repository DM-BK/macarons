import {SxProps} from '@mui/material/styles'

type ButtonType = (isActive: boolean) => SxProps

export const Button: ButtonType = (isActive) => ({
    // textDecoration: isActive ? 'underline' : 'none',
    // textDecorationThickness: '15px'

    // borderBottom: isActive ? '2px solid #4bb4b4' : 'none',
    position: 'relative',

    '&:before': {
        content: '""',
        transition: 'width .3s',
        position: 'absolute',
        height: '2px',
        width: isActive ? '50px' : '0',
        bgcolor: '#4bb4b4',
        bottom: 0
    }
})