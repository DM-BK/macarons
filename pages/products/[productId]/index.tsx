import React from 'react';
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from 'next'
import {ProductsItem} from "@components/pages/Products/ProductsItem/ProductsItem";
import {allProducts, ProductType} from '../../../products/productsConfig'

type Params = {
    productId: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const paths = Object.keys(allProducts).map(key => ({
        params: {
            productId: String(key)
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<ProductType, Params> = async (context) => {
    const {params} = context
    const productId = params?.productId

    const product = productId && allProducts[Number(productId)]
    if (!product) return {
        notFound: true
    }
    // console.log(product)
    return {
        props: {
            ...product
        }
    }
}

const ProductItem = ({
                         img,
                         id,
                         discount,
                         isNew,
                         oldPrice,
                         currentPrice,
                         label
                     }: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <ProductsItem
            isNew={isNew}
            img={img}
            id={id}
            discount={discount}
            oldPrice={oldPrice}
            currentPrice={currentPrice}
            label={label}
        />
    );
};

export default ProductItem;