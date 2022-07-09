import React from 'react';
import {Box} from '@common'
import {
    ProductReviewItem
} from "@components/pages/Products/Product/ProductReview/ProductReviewItem";
import * as styles from './ProductReviewStyles'
import {ProductReviewForm} from "@components/pages/Products/Product/ProductReview/ProductReviewForm";

export const ProductReview = () => {
    return (
        <Box>
            <Box sx={styles.ProductsReviewItemsBox}>
                <ProductReviewItem/>
                <ProductReviewItem/>
                <ProductReviewItem/>
                <ProductReviewItem/>
            </Box>
            <ProductReviewForm/>
        </Box>
    );
};
