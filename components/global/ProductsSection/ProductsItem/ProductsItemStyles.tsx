import {SxProps} from '@mui/material/styles'

type getProductsItemOuterType = (isAll?: boolean) => SxProps

export const getProductsItemOuter: getProductsItemOuterType = (isAll) => ({

    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all .25s ease-in-out',
    outline: '1px solid #f3f5f9',
    width: {
        xs: '100%',
        md: isAll ? '48.2%' : 'inherit',
        lg: isAll ? '31.28%' : 'inherit',
        xl: isAll ? '31.895%' : 'inherit'
    },


    '&:hover': {
        boxShadow: '0px 4px 16px rgb(43 52 69 / 10%)',
    },

})

export const ProductsItemLinkTop: SxProps = {
    color: 'inherit',

    '&:hover': {
        textDecoration: 'none',
    }
}

export const ProductsItemTopInner: SxProps = {
    height: '250px',
    padding: '60px 40px 20px 40px',
    backgroundColor: '#f5f5f5',
    marginBottom: '20px',
}

export const ProductsItemDiscount: SxProps = {
    position: 'absolute',
    left: '0',
    top: '10px',
    width: '52px',
    height: '24px',
    backgroundColor: '#4bb4b4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',

    fontSize: '10px',
    fontWeight: '400'
}

export const ProductsItemNew: SxProps = {
    position: 'absolute',
    top: '0',
    right: '20px',
    width: '40px',
    height: '42px',
    backgroundColor: '#4bb4b4',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',

    fontSize: '12px',
    fontWeight: '400'
}

export const ProductsItemNewBottom: SxProps = {
    position: 'absolute',
    bottom: '-10px',
    height: '10px',
    width: '40px',
    borderLeft: '20px solid #4bb4b4',
    borderRight: '20px solid #4bb4b4',
    borderBottom: '10px solid transparent'
}

export const ProductsItemImageBox: SxProps = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    top: '17px',
}

export const ProductsItemBottom: SxProps = {
    padding: 2,
    display: 'flex',
}

export const ProductsItemLinkBottomText: SxProps = {
    fontSize: '24px',
    color: '##373F50',
}

export const ProductsItemBottomLeft: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 2
}

export const ProductsItemPriceBox: SxProps = {
    display: 'flex',
    gap: '15px',
    mt: 2
}

export const ProductsItemPrice: SxProps = {
    color: 'primary.main'
}

export const ProductsItemOldPrice: SxProps = {
    color: '#7d879c',
    textDecoration: 'line-through'
}