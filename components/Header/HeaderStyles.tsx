import {SxProps, Theme} from '@mui/material/styles'
import {SystemStyleObject} from '@mui/system/styleFunctionSx'

type GetStylesType = (theme: Theme) => SystemStyleObject<Theme>

type GetAppBarStylesType = (isAnimate: boolean) => SxProps<Theme>

export const getAppBar: GetAppBarStylesType = (isAnimate) => ({
    position: isAnimate ? 'fixed' : 'static',
    top: isAnimate ? '0' : '-64px',
    transition: 'all .5s',

    '& .MuiToolbar-root': {
        padding: '0'
    }
})

export const HeaderContainer: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

export const getLinksBox: GetStylesType = theme => ({
    display: 'none',
    gap: '20px',

    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
})
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