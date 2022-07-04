import {SxProps} from '@mui/material/styles'

type TopSaleProductsGridItemType = (number: string) => SxProps

export const TopSaleProductsGrid: SxProps = {
    display: 'grid',
    gridTemplateColumns: {
        xs: '1fr',
        md: 'repeat(5, minmax(15%, 1fr))'
    },
    gridTemplateRows: {
        xs: 'repeat(5, 100px)',
        md: 'repeat(6, 70px)'
    },
    gap: '30px',
    gridTemplateAreas: {
        xs: "'first'\n" +
            "'second'\n" +
            "'fourth'\n" +
            "'fifth'\n" +
            "'third'",

        md: "'first first first second second'\n" +
            "'first first first second second'\n" +
            "'third third third fourth fourth'\n" +
            "'third third third fourth fourth'\n" +
            "'third third third fifth fifth'\n" +
            "'third third third fifth fifth'",
    }
}

export const getTopSaleProductsGridItem: TopSaleProductsGridItemType = number => ({
    border: 1,
    gridArea: number
})

export const TopSaleProductsFirstElement: SxProps = {
    gridArea: 'first',
    border: 1,
}

export const TopSaleProductsSecondElement: SxProps = {
    gridArea: 'second',
    border: 1,
}

export const TopSaleProductsThirdElement: SxProps = {
    gridArea: 'third',
    border: 1,
}

export const TopSaleProductsFourthElement: SxProps = {
    gridArea: 'fourth',
    border: 1,
}

export const TopSaleProductsFifthElement: SxProps = {
    gridArea: 'fifth',
    border: 1,
}