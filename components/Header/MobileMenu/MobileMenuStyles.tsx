import {SxProps, Theme} from '@mui/material/styles'
import {SystemStyleObject} from '@mui/system/styleFunctionSx/styleFunctionSx'

type GetStylesType = (theme: Theme) => SystemStyleObject<Theme>

export const Drawer: SxProps = {
    '.MuiDrawer-paper': {
        width: '100%',
        maxWidth: '250px'
    }
}

export const CloseIcon: SxProps = {
    justifyContent: 'flex-end'
}

export const getBurgerBox: GetStylesType = theme => ({
    border: 1,
    borderColor: 'grey.400',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
        display: 'none'
    }
})