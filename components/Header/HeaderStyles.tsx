import {SxProps, Theme} from '@mui/material/styles'

type GetStylesType = (theme: Theme) => SxProps

type GetAppBarStylesType = (isAnimate: boolean) => SxProps<Theme>

const animate: SxProps = {
    from: {
        transform: 'translateY(-40px)',
        opacity: 0,
    },
    to: { 
        transform: 'translateY(0)',
        opacity: 1 
    },
};

export const getAppBar: GetAppBarStylesType = (isAnimate) => ({
    position: isAnimate ? 'fixed' : 'absolute',
    top: 0,
    opacity: 0,
    animationName: isAnimate ? 'fadein2' : 'fadein1',
    animationDuration: '.5s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',

    '@keyframes fadein1': animate,
    '@keyframes fadein2': animate,

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
    display: 'flex',
    visibility: {
        xs: 'hidden',
        md: 'visible',
    },
    width: {
      xs: '0',
      md: 'auto',
    },
    height: {
      xs: '0',
      md: '100%'
    },
    gap: '20px',
})
