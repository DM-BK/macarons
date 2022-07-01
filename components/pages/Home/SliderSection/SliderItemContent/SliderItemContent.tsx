import React from 'react';
import {Box, Button, Typography, Container} from "@common";
import * as styles from "./SliderItemContentStyles";

export const SliderItemContent = () => {

    return (
        <Box sx={styles.SliderItemContentBox}>
            <Container maxWidth={'lg'}>
                <Box sx={styles.SlideItemContentInnerBox}>
                    <Typography variant={'body1'}>A Beautiful House</Typography>
                    <Typography variant={'h1'} sx={styles.SlideItemContentTitle}>Modern Furniture</Typography>
                    <Typography variant={'body1'} sx={styles.SlideItemContentDescription}>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Alias amet in minima provident
                        quis.
                        Animi aut culpa delectus distinctio ea earum fugiat natus sit veritatis.</Typography>
                    <Button sx={styles.SlideItemContentButton}>Shop Now</Button>
                </Box>
            </Container>
        </Box>
    );
};
