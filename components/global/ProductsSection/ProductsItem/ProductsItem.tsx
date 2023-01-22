import React, { ReactNode } from 'react'
import { Box, Link, Typography, Image, Item } from '@common'

import { routes } from '@routes'

import * as styles from './ProductsItemStyles'
import { AddToCart } from '@components/global/AddToCart/AddToCart'

export interface ProductsItemProps {
    img: string
    discount: number
    isNew: boolean
    label: string
    currentPrice: number
    oldPrice: number
    id: number
    isSwiper?: boolean
}

interface WrapperProps {
    children: ReactNode
    isSwiper?: boolean
}

const Wrapper = ({ children, isSwiper }: WrapperProps) => {
    if (isSwiper) {
        return <Box sx={styles.ProductsItemOuter}>{children}</Box>
    }

    return (
        <Item item xs={12} md={6} lg={4}>
            <Box sx={styles.ProductsItemOuter}>{children}</Box>
        </Item>
    )
}

export const ProductsItem = ({
    img,
    currentPrice,
    oldPrice,
    isNew,
    discount,
    label,
    id,
    isSwiper,
}: ProductsItemProps) => {
    return (
        <Wrapper isSwiper={isSwiper}>
            <Link
                sx={styles.ProductsItemLinkTop}
                href={routes.PRODUCTS.path + `/${id}`}
            >
                <Box sx={styles.ProductsItemTopInner}>
                    <Box>
                        <Box sx={styles.ProductsItemDiscount}>
                            {discount}% off
                        </Box>
                    </Box>
                    {isNew && <Box sx={styles.ProductsItemNew}>new</Box>}
                    <Box sx={styles.ProductsItemImageBox}>
                        <Image
                            width={200}
                            height={200}
                            src={img}
                            alt={'chair'}
                            objectFit={'contain'}
                        />
                    </Box>
                </Box>
            </Link>
            <Box sx={styles.ProductsItemBottom}>
                <Box sx={styles.ProductsItemBottomLeft}>
                    <Link withoutStyles href={'/'}>
                        <Typography
                            variant={'h3'}
                            sx={styles.ProductsItemLinkBottomText}
                        >
                            {label}
                        </Typography>
                    </Link>
                    <Box sx={styles.ProductsItemPriceBox}>
                        <Box sx={styles.ProductsItemPrice}>${currentPrice}</Box>
                        <Box sx={styles.ProductsItemOldPrice}>{oldPrice}</Box>
                    </Box>
                </Box>
                <AddToCart id={id} />
            </Box>
        </Wrapper>
    )
}
