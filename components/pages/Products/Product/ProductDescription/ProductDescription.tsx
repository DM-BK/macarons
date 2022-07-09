import React from 'react';
import {Box, Typography} from '@common'

import * as styles from './ProductDescriptionStyles'

export const ProductDescription = () => {
    return (
        <Box sx={styles.ProductDescriptionBox}>
            <Typography variant={'h3'} sx={styles.ProductDescriptionSpecTitle}>Specification:</Typography>
            <Typography>Brand: Beats</Typography>
            <Typography>Model: S450</Typography>
            <Typography>Wireless Bluetooth Headset</Typography>
            <Typography>FM Frequency Response: 87.5 – 108 MHz</Typography>
            <Typography>Feature: FM Radio, Card Supported (Micro SD / TF)</Typography>
            <Typography>Made in China</Typography>
        </Box>
    );
};