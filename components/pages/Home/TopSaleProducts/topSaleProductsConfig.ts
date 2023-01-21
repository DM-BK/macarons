import {allProducts, ProductType} from '@products'

export const topSaleProducts: ProductType[] = [
    allProducts['1'],
    allProducts['2'],
    allProducts['3'],
    allProducts['4'],
    allProducts['5'],
]

export const gridArea: {
    [key: number]: string
} = {
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'fourth',
    5: 'fifth'
}