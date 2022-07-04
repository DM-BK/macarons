import {SxProps} from '@mui/material/styles'

type getArrowButtonSliderType = (prev: boolean) => SxProps

export const getArrowSliderButton: getArrowButtonSliderType = (prev) => ({
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: prev ? '5px' : 'auto',
    right: prev ? 'auto' : '5px',
    zIndex: '10',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 4px 16px rgb(43 52 69 / 10%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#DDFBF1'
    },
})