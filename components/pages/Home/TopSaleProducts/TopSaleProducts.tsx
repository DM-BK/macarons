import React from 'react';

import {Box, Container} from '@common'

import * as styles from './TopSaleProductsStyles'

export const TopSaleProducts = () => {
    return (
        <Container>
            <Box sx={styles.TopSaleProductsGrid}>
                <Box sx={styles.getTopSaleProductsGridItem('first')}>First</Box>
                <Box sx={styles.getTopSaleProductsGridItem('second')}>Second</Box>
                <Box sx={styles.getTopSaleProductsGridItem('third')}>Third</Box>
                <Box sx={styles.getTopSaleProductsGridItem('fourth')}>Fourth</Box>
                <Box sx={styles.getTopSaleProductsGridItem('fifth')}>Fifth</Box>
            </Box>
        </Container>
    );
};