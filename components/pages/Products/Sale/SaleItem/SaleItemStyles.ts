import {SxProps} from '@mui/material/styles'

export const SaleItemWrapper: SxProps = {
    p: '24px 0 0 24px',
    // flexBasis: {
    //     xs: '100%',
    //     md: '50%',
    //     lg: '33%',
    //     xl: '25%'
    // }
    width: {
        xs: '100%',
        md: '50%',
        lg: '33.33%',
        xl: '25%'
    }
}

export const SaleItem: SxProps = {
    boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
}

export const Top: SxProps = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
}

export const Discount: SxProps = {
    backgroundColor: 'primary.main',
    borderRadius: '16px',
    p: '2px',
    position: 'absolute',
    top: '10px',
    left: '10px'
}

export const DiscountLabel: SxProps = {
    fontSize: '10px',
    fontWeight: '500',
    p: '0 8px',
    color: '#fff'
}

export const LikeBox: SxProps = {
    position: 'absolute',
    top: '7px',
    right: '15px'
}

export const LikeIcon: SxProps = {
    fontSize: '18px'
}

export const FiledLike: SxProps = {
    fontSize: '18px',
    color: 'primary.main'
}

export const Bottom: SxProps = {
    p: 2,
    display: 'flex',
    justifyContent: 'space-between',
}

export const BottomLeft: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

export const Label: SxProps = {
    color: 'rgb(55, 63, 80)',
    fontSize: '14px',
    fontWeight: '500'
}

export const Rating: SxProps = {
}

export const PriceBox: SxProps = {
    display: 'flex',
    gap: '4px',
}

export const CurrentPrice: SxProps = {
    fontWeight: '500',
    fontSize: '14px',
    color: 'primary.main'
}

export const OldPrice: SxProps = {
    fontWeight: '500',
    fontSize: '14px',
    color: 'rgb(125, 135, 156)',
    textDecoration: 'line-through'
}