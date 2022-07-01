import React, {useState} from 'react';
import {Box, Link, IconButton, Typography, Image} from "@common";
import * as styles from './ProductsItemStyles'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ProductsItem = () => {

    const [productsCount, setProductsCount] = useState(0)

    const handleAddProduct = () => setProductsCount(prev => prev + 1)
    const handleSubtractProduct = () => setProductsCount(prev => prev - 1)

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
                        <Image
                            width={200}
                            height={200}
                            src={'/chair.webp'}
                            alt={'chair'}
                            objectFit={'cover'}
                        />
                    </Box>
                </Box>
            </Link>
            <Box sx={styles.ProductsItemBottom}>
                <Box sx={styles.ProductsItemBottomLeft}>
                    <Link withoutStyles href={'/'}>
                        <Typography variant={'h3'} sx={styles.ProductsItemLinkBottomText}>Grey Sofa</Typography>
                    </Link>
                    <Box sx={styles.ProductsItemPriceBox}>
                        <Box sx={styles.ProductsItemPrice}>$11</Box>
                        <Box sx={styles.ProductsItemOldPrice}>115</Box>
                    </Box>
                </Box>
                <Box sx={styles.ProductsItemCountBox}>
                    {productsCount > 0
                        ? <>
                            <IconButton
                                sx={styles.ProductsItemAdd}
                                color={'primary'}
                                onClick={handleSubtractProduct}
                            >
                                <RemoveIcon/>
                            </IconButton>
                            <Typography variant={'h5'} sx={styles.ProductsItemCount}>{productsCount}</Typography>
                        </>
                        : null
                    }
                    <IconButton sx={{...styles.ProductsItemAdd, alignSelf: 'flex-end'}} color={'primary'}
                                onClick={handleAddProduct}>
                        <AddIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};
