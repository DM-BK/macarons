import React from 'react';
import {Box} from '@common'
import {
    ProductsReviewItem
} from "@components/pages/Products/ProductsItem/ProductsReview/ProductsReviewItem";
import * as styles from './ProductsReviewStyles'
import {ProductsReviewForm} from "@components/pages/Products/ProductsItem/ProductsReview/ProductsReviewForm";

export const ProductsReview = () => {
    return (
        <Box>
            <Box sx={styles.ProductsReviewItemsBox}>
                <ProductsReviewItem/>
                <ProductsReviewItem/>
                <ProductsReviewItem/>
                <ProductsReviewItem/>
            </Box>
            <ProductsReviewForm/>
        </Box>
    );
};
