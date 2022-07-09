import React from 'react';
import {Avatar, Box, Rating, Typography} from "@common";
import * as styles from './ProductReviewItemStyles'

export const ProductReviewItem = () => {
    return (
        <Box>
            <Box sx={styles.ProductsReviewItemBox}>
                <Avatar alt={'avatar'} src={'/avatar.png'}/>
                <Box>
                    <Typography variant={'h5'} sx={styles.ProductsReviewItemName}>Jannie Schumm</Typography>
                    <Box sx={styles.ProductsReviewItemRatingBox}>
                        <Rating readOnly/>
                        <Typography sx={styles.ProductsReviewItemRatingNumber}>4.7</Typography>
                        <Typography sx={styles.ProductsReviewItemRatingDate}>2 years ago</Typography>
                    </Box>
                </Box>
            </Box>
            <Typography sx={styles.ProductsReviewItemText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae
                gravida egestas ac account.
            </Typography>
        </Box>
    );
};