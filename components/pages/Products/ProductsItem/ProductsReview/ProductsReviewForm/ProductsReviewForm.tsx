import React from 'react';
import {Box, Typography, Rating, TextField, Button} from '@common'

import * as styles from './ProductsReviewFormStyles'

export const ProductsReviewForm = () => {
    return (
        <Box sx={styles.ProductsReviewFormBox}>
            <Typography variant={'h2'} sx={styles.ProductsReviewFormTitle}>Write a Review for this
                product</Typography>
            <Box sx={styles.ProductsReviewFormRatingBox}>
                <Box sx={styles.ProductsReviewFormRatingLegendBox}>
                    <Typography component={'legend'} sx={styles.ProductsReviewFormLegendText}>Your
                        Rating</Typography>
                    <Typography component={'legend'} sx={styles.ProductsReviewFormLegendStart}>*</Typography>
                </Box>
                <Rating precision={0.5}/>
            </Box>
            <Box>
                <Box sx={{display: 'flex', gap: '3px', mb: '12px'}}>
                    <Typography component={'legend'} sx={styles.ProductsReviewFormLegendText}>Your
                        Review</Typography>
                    <Typography component={'legend'} sx={styles.ProductsReviewFormLegendStart}>*</Typography>
                </Box>
                <TextField sx={styles.ProductsReviewFormInput} multiline rows={6}
                           placeholder={'Write a review here...'}/>
                <Button sx={styles.ProductsReviewFormButton}>Submit</Button>
            </Box>
        </Box>
    );
};