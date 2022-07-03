import React from 'react';

import {Box, Container, Typography} from '@common'
import {ProductsItem} from "@components/global/ProductsSection/ProductItem";
import {allProductsConfig} from './allProductsConfig'

import * as styles from './AllProductsStyles'

export const AllProducts = () => {

    return (
        <Container sx={{mt: 8}}>
            <Typography sx={styles.AllProductsTitle}>All Products</Typography>
            <Typography sx={styles.AllProductsDesc}>Tall blind but were, been folks not the expand</Typography>
            <Box sx={styles.AllProductsFlexContainer}>
                {allProductsConfig.map(product => (
                    <ProductsItem
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
        </Container>
    );
};
