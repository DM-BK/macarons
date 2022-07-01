import {SxProps} from '@mui/material/styles'

export const ProductContainerStyles: SxProps = {
    position: 'relative',
    mb: 3,

    '.swiper': {
        padding: '15px',
        margin: '-15px'
    },

    '& .swiper-slide': {
        padding: '1px',
    }
}

export const ProductsSectionTitle: SxProps = {
    color: '#2B3445',
    fontSize: '30px',
    mb: 2,
    fontWeight: '700'
}

export const ProductsSectionDesc: SxProps = {
    color: '#7D879C',
    mb: 2,
    fontSize: '14px'
}