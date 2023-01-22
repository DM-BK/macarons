import { SxProps } from '@mui/material/styles'

export const gridArea: {
    [key: number]: string
} = {
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'fourth',
    5: 'fifth',
}

type TopSaleProductsItemType = (position: string) => SxProps

export const Container: SxProps = {
    display: 'flex',
    gap: '24px',
    mb: '30px',
}

export const Navigation: SxProps = {
    display: {
        xs: 'none',
        lg: 'block',
    },
}

export const TopSaleProductsGrid: SxProps = {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: {
        xs: '1fr',
        md: '6fr 4fr',
    },
    gridTemplateRows: {
        xs: 'repeat(5, 230px)',
        md: 'repeat(3, 230px)',
    },
    gap: '24px',
    gridTemplateAreas: {
        xs: "'first'\n" + "'second'\n" + "'third'\n" + "'fourth'\n" + "'fifth'",

        md: "'first  second'\n" + "'third  fourth'\n" + "'third  fifth'\n",
    },
}

export const getTopSaleProductsGridItem: TopSaleProductsItemType = (
    position
) => ({
    gridArea: position,
    background: '#F5F5F5',
    p: '24px',
    position: 'relative',
    textAlign: 'start',
    isolation: 'isolate',
    transition: 'box-shadow .3s, scale .3s',
    cursor: 'pointer',

    '&:hover': {
        boxShadow: '0 0 5px 2px rgba(0, 0, 0, .05)',
        scale: '1.01'
    },
})

export const Category: TopSaleProductsItemType = (position) => ({
    fontSize: '14px',
    lineHeight: '1.5',
})

export const Sale: TopSaleProductsItemType = (position) => ({
    color: 'primary.main',
    fontSize: '35px',
    fontWeight: '600',
    lineHeight: '1.5',
})

export const Discount: TopSaleProductsItemType = (position) => ({
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '1.5',
    textTransform: 'uppercase',
})

export const Button: SxProps = {
    background: 'transparent',
    color: 'inherit',
    border: 0,
    boxShadow: 'none',
    p: '4px 12px',
    fontSize: '12px',
    textTransform: 'initial',
    textDecoration: 'underline',
    mt: '5px',

    '&:hover': {
        background: 'rgba(43, 52, 69, 0.04)',
        border: 0,
        boxShadow: 'none',
        textDecoration: 'none',
    },
}

export const ImageBox: TopSaleProductsItemType = (position) => ({
    position: 'absolute',
    width: [ 'third'].includes(position) ? '100%' : '200px',
    height: 'calc(100% - 50px)',
    right: '0',
    top: '50%',
    translate: '0 -50%',
    zIndex: -2,

    'img': {
        objectFit: 'contain',
        height: '100%',
    },
})
