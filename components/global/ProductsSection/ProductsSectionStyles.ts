import { SxProps } from '@mui/material/styles'

export const ProductContainerStyles: SxProps = {
  position: 'relative',
  mb: 3,
  overflowX: 'hidden',
  p: '15px 24px',

  '.swiper': {
    p: '15px',
    m: '-15px',
    overflow: 'visible',
  },

  '& .swiper-slide': {
    padding: '1px',
  },

  // '.swiper-slide': {
  //     // position: 'absolute',
  //     opacity: 0,
  //     visibility: 'hidden',
  //     transition: 'opacity 200ms ease-in-out, visibility 200ms ease-in-out'
  // },
  //
  // '.swiper-slide-active': {
  //     // position: 'relative',
  //     opacity: 1,
  //     visibility: 'visible',
  // },
  //
  // '.swiper-slide-active + .swiper-slide': {
  //     // position: 'relative',
  //     opacity: 1,
  //     visibility: 'visible',
  // },
  //
  // '.swiper-slide-active + .swiper-slide + .swiper-slide': {
  //     // position: 'relative',
  //     opacity: 1,
  //     visibility: 'visible',
  // },
}

export const ProductsSectionTitle: SxProps = {
  color: '#2B3445',
  fontSize: '30px',
  mb: 2,
  fontWeight: '700',
}

export const ProductsSectionDesc: SxProps = {
  color: '#7D879C',
  mb: 2,
  fontSize: '14px',
}
