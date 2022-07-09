import React from 'react';
import {Box} from '@common'
import {
    ProductsReviewItemItem
} from "@components/pages/Products/ProductsItem/ProductsReview/ProductsReviewItem";
import * as styles from './ProductsReviewStyles'
import {ProductsReviewForm} from "@components/pages/Products/ProductsItem/ProductsReview/ProductsReviewForm";

export const ProductsReview = () => {
    return (
        <Box>
            <Box sx={styles.ProductsReviewItemsBox}>
                <ProductsReviewItemItem/>
                <ProductsReviewItemItem/>
                <ProductsReviewItemItem/>
                <ProductsReviewItemItem/>
            </Box>
            <ProductsReviewForm/>
        </Box>
    );
};
