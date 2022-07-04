import {SxProps} from '@mui/material/styles'

export const AllProductsFlexContainer: SxProps = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: {
        sx: 'center',
        md: 'space-between'
    },
    rowGap: '30px'
}

export const AllProductsTitle: SxProps = {
    mb: 2,
    color: '#2b3445',
    fontSize: '30px',
    fontWeight: '700'
}

export const AllProductsDesc: SxProps = {
    color: '#7D879C',
    mb: 2,
    fontSize: '14px'
}
