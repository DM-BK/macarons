import React from 'react';
import {Box, Link, IconButton, Typography} from "@common";
import * as styles from './ProductsItemStyles'

import AddIcon from '@mui/icons-material/Add';

export const ProductsItem = () => {
    return (
        <Box sx={styles.ProductsItemOuter}>
            <Link sx={styles.ProductsItemLinkTop}>
                <Box sx={styles.ProductsItemTopInner}>
                    <Box>
                        <Box sx={styles.ProductsItemDiscount}>
                            20% off
                        </Box>
                    </Box>
                    <Box sx={styles.ProductsItemNew}>
                        new
                        <Box sx={styles.ProductsItemNewBottom}/>
                    </Box>
                    <Box sx={styles.ProductsItemImageBox}>
                        <Box
                            alt={'chair'}
                            src={'/chair.webp'}
                            component={'img'}
                            sx={styles.ProductsItemImage}
                        />
                    </Box>
                </Box>
            </Link>
            <Box sx={styles.ProductsItemBottom}>
                <Box sx={styles.ProductsItemBottomLeft}>
                    <Link sx={styles.ProductsItemLinkBottom} href={'/'}>
                        <Typography variant={'h3'} sx={styles.ProductsItemLinkBottomText}>Grey Sofa</Typography>
                    </Link>
                    <Box sx={styles.ProductsItemPriceBox}>
                        <Box sx={styles.ProductsItemPrice}>$11</Box>
                        <Box sx={styles.ProductsItemOldPrice}>115</Box>
                    </Box>
                </Box>
                <IconButton sx={styles.ProductsItemAdd} color={'primary'}>
                    <AddIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};
