import React from 'react';
import {Box, Link, Typography, Image, IconButton} from "@common";
import * as styles from './ProductsSliderItemStyles'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useAddRemoveItem} from "@hooks";
import {routes} from "@routes";

export interface ProductsItemProps {
    img: string
    discount: number
    isNew: boolean
    label: string
    currentPrice: number
    oldPrice: number
    isAll?: boolean
    id: number
}

export const ProductsSliderItem = (
    {
        img,
        currentPrice,
        oldPrice,
        isNew,
        discount,
        label,
        isAll,
        id
    }: ProductsItemProps) => {
    const [productsCount, handleAddProduct, handleSubtractProduct] = useAddRemoveItem()

    return (
        <Box sx={styles.getProductsItemOuter(isAll)}>
            <Link sx={styles.ProductsItemLinkTop} href={routes.PRODUCTS.path + `/${id}`}>
                <Box sx={styles.ProductsItemTopInner}>
                    <Box>
                        <Box sx={styles.ProductsItemDiscount}>
                            {discount}% off
                        </Box>
                    </Box>
                    {isNew && <Box sx={styles.ProductsItemNew}>
                        new
                        <Box sx={styles.ProductsItemNewBottom}/>
                    </Box>}
                    <Box sx={styles.ProductsItemImageBox}>
                        <Image
                            width={200}
                            height={200}
                            src={img}
                            alt={'chair'}
                            objectFit={'cover'}
                        />
                    </Box>
                </Box>
            </Link>
            <Box sx={styles.ProductsItemBottom}>
                <Box sx={styles.ProductsItemBottomLeft}>
                    <Link withoutStyles href={'/'}>
                        <Typography variant={'h3'} sx={styles.ProductsItemLinkBottomText}>{label}</Typography>
                    </Link>
                    <Box sx={styles.ProductsItemPriceBox}>
                        <Box sx={styles.ProductsItemPrice}>${currentPrice}</Box>
                        <Box sx={styles.ProductsItemOldPrice}>{oldPrice}</Box>
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
                                <RemoveIcon sx={styles.ProductsItemPointerEvents} fontSize={'small'}/>
                            </IconButton>
                            <Typography variant={'h5'} sx={styles.ProductsItemCount}>{productsCount}</Typography>
                        </>
                        : null
                    }
                    <IconButton sx={{...styles.ProductsItemAdd}} color={'primary'}
                                onClick={handleAddProduct}>
                        <AddIcon fontSize={'small'} sx={styles.ProductsItemPointerEvents}/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};
