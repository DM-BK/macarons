import {SxProps} from '@mui/material/styles'

export const SliderItemContentBox: SxProps = {
    //между слайдами при 100% ширины есть щель, как по-другому решить, в душе не ебу... и лучше не лезь, а то сожрет
    width: {
        xs: '101%',
        lg: '102%'
    },
    background: 'url("/rose.jpeg") center no-repeat',
    backgroundSize: 'cover',
    color: '#2b3445',
}

export const SlideItemContentInnerBox: SxProps = {
    padding: '132px 0 180px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: {
        xs: 'center',
        md: 'flex-start'
    },
    maxWidth: {
        xs: '100%',
        md: '70%',
        lg: '50%',
    },
    textAlign: {
        xs: 'center',
        md: 'start'
    }
}

export const SlideItemContentTitle: SxProps = {
    fontWeight: '600',
    fontSize: {
        xs: '40px',
        md: '50px',
        lg: '60px'
    }
}

export const SlideItemContentDescription: SxProps = {
    fontSize: '14px',
    color: '#7d879c',
}

export const SlideItemContentButton: SxProps = {
    borderRadius: 'unset',
    color: '#fff',
    padding: '8px 30px',
    fontWeight: '400',
}