import React, {useRef, useState} from 'react';

import {Box, Container, Typography, Button} from '@common'
import {ProductsSliderItem} from "@components/global/ProductsSection/ProducSlidertItem";
import {allProductsConfig} from './allProductsConfig'

import * as styles from './AllProductsStyles'
import {AllProductsLoadMoreBox} from "./AllProductsStyles";


export const AllProducts = () => {
    const productsLimitRef = useRef(9)
    const [allProducts, setAllProducts] = useState(() => allProductsConfig.slice(0, productsLimitRef.current))

    const handleLoadMoreProducts = () => {
        productsLimitRef.current += 9
        setAllProducts(allProductsConfig.slice(0, productsLimitRef.current))
    }

    const isLimit = productsLimitRef.current >= allProductsConfig.length

    return (
        <Container sx={{mt: 8}}>
            <Typography sx={styles.AllProductsTitle}>All Products</Typography>
            <Typography sx={styles.AllProductsDesc}>Tall blind but were, been folks not the expand</Typography>
            <Box sx={styles.AllProductsFlexContainer}>
                {allProducts.map(product => (
                    <ProductsSliderItem
                        id={product.id}
                        key={product.id}
                        img={product.img}
                        oldPrice={product.oldPrice}
                        currentPrice={product.currentPrice}
                        isNew={product.isNew}
                        discount={product.discount}
                        label={product.label}
                        isAll
                    />
                ))}
            </Box>
            <Box sx={AllProductsLoadMoreBox}>
                <Button sx={styles.AllProductsLoadMore}
                        disabled={isLimit}
                        onClick={handleLoadMoreProducts}>Load More</Button>
            </Box>
        </Container>
    );
};
