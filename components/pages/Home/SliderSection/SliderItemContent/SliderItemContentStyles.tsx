import { SxProps } from '@mui/material/styles'

export const SliderItemContentBox: SxProps = {
    //между слайдами при 100% ширины есть щель, как по-другому решить, в душе не ебу... и лучше не лезь, а то сожрет
    width: {
        xs: '101%',
        lg: '102%',
    },
    position: 'relative',
    isolation: 'isolate',

    '&:before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, .3)',
        zIndex: '-1'
    },

    paddingTop: '64px',
    background: 'url("/furniture.jpeg") center no-repeat',
    backgroundSize: 'cover',
    color: '#fff',
}

export const SlideItemContentInnerBox: SxProps = {
    padding: '132px 0 180px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: {
        xs: 'center',
        md: 'flex-start',
    },
    maxWidth: {
        xs: '100%',
        md: '70%',
        lg: '50%',
    },
    textAlign: {
        xs: 'center',
        md: 'start',
    },
}

export const SlideItemContentTitle: SxProps = {
    fontWeight: '600',
    fontSize: {
        xs: '40px',
        md: '50px',
        lg: '60px',
    },
}

export const SlideItemContentDescription: SxProps = {
    fontSize: '14px',
    color: '#fff',
}

export const SlideItemContentButton: SxProps = {
    borderRadius: 'unset',
    color: '#fff',
    padding: '8px 30px',
    fontWeight: '400',
}
