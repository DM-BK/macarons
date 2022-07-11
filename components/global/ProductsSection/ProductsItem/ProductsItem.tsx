import React from 'react';
import {Box, Link, Typography, Image} from "@common";

import {useAddRemoveItem} from "@hooks";
import {routes} from "@routes";

import * as styles from './ProductsItemStyles'
import {AddRemoveItem} from "@components/global/AddRemoveItem/AddRemoveItem";

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

export const ProductsItem = (
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
                <AddRemoveItem
                    productsCount={productsCount}
                    handleAddProduct={handleAddProduct}
                    handleSubtractProduct={handleSubtractProduct}
                />
            </Box>
        </Box>
    );
};
