import {ProductType, allProducts} from '../../../products/productsConfig'


// export const allProductsConfig: ProductType[] = [
//     allProducts['1'],
//     allProducts['2'],
//     allProducts['3'],
//     allProducts['4'],
//     allProducts['5'],
//     allProducts['6'],
//     allProducts['7'],
//     allProducts['8'],
//     allProducts['9'],
// ]

export const allProductsConfig: ProductType[] = []

for (const allProductsKey in allProducts) {
    allProductsConfig.push(allProducts[allProductsKey])
}
