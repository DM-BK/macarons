import React, {useState} from 'react';

import {Box, Container, Typography, Button, Item} from '@common'
import {ProductsItem} from "@components/global/ProductsSection/ProductsItem";
import {allProductsConfig} from './allProductsConfig'

import * as styles from './AllProductsStyles'
import {AllProductsLoadMoreBox} from "./AllProductsStyles";

const productsPerView = 9

export const AllProducts = () => {
    const [allProducts, setAllProducts] = useState(() => allProductsConfig.slice(0, productsPerView))

    const handleLoadMoreProducts = () => {
        setAllProducts(allProductsConfig.slice(0, allProducts.length + productsPerView))
    }

    const isMaxProducts = allProducts.length >= allProductsConfig.length

    return (
        <Container sx={{mt: 8}}>
            <Typography sx={styles.AllProductsTitle}>All Products</Typography>
            <Typography sx={styles.AllProductsDesc}>Tall blind but were, been folks not the expand</Typography>
            <Item container spacing={4}>
                {allProducts.map(product => (
                    <ProductsItem
                        id={product.id}
                        key={product.id}
                        img={product.img}
                        oldPrice={product.oldPrice}
                        currentPrice={product.currentPrice}
                        isNew={product.isNew}
                        discount={product.discount}
                        label={product.label}
                    />
                ))}
            </Item>
            <Box sx={AllProductsLoadMoreBox}>
                <Button sx={styles.AllProductsLoadMore}
                        disabled={isMaxProducts}
                        onClick={handleLoadMoreProducts}>Load More</Button>
            </Box>
        </Container>
    );
};
