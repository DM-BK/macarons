import {SxProps} from '@mui/material/styles'

export const SliderOuterBox: SxProps = {

    '.swiper': {
        display: 'flex',
    },

    '.swiper-pagination-bullet': {
        width: '16px',
        height: '16px',
        border: '1px solid',
        borderColor: 'primary.main',
        borderRadius: '50%',
        position: 'relative',
    },

    '.swiper-pagination-bullet-active': {
        backgroundColor: 'unset',
    },

    '.swiper-pagination-bullet-active::after': {
        content: '""',
        position: 'absolute',
        width: '9px',
        height: '9px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'primary.main',
        borderRadius: '50%',
    }
}
