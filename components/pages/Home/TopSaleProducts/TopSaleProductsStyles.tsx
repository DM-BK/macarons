import { SxProps } from '@mui/material/styles'

type TopSaleProductsGridItemType = (number: string) => SxProps

export const Container: SxProps = {
    mb: '30px',
}

export const TopSaleProductsGrid: SxProps = {
    display: 'grid',
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

export const getTopSaleProductsGridItem: TopSaleProductsGridItemType = (
    number
) => ({
    gridArea: number,
    background: '#F5F5F5',
    p: '24px',
    position: 'relative',

    '.label': {
        fontSize: '14px',
        lineHeight: '1.5',
    },

    '.sale': {
        color: 'primary.main',
        fontSize: '35px',
        fontWeight: '600',
        lineHeight: '1.5',
    },

    '.up-to': {
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '1.5',
        textTransform: 'uppercase',
    },

    button: {
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
    },

    '.image-box': {
        position: 'absolute',
        width: '200px',
        height: 'calc(100% - 50px)',
        right: '0',
        top: '50%',
        translate: '0 -50%',

        img: {
            objectFit: 'contain',
            height: '100%',
        },
    },

    '&.second, &.third': {
        textAlign: 'center',
        isolation: 'isolate',

        '.image-box': {
            width: '100%',
            zIndex: '-1',
        },
    },
})
