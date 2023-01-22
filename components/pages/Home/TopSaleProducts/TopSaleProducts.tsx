import React from 'react'
import { useRouter } from 'next/router'

import { Box, Container, Typography, Button, Image } from '@common'

import { topSaleProducts } from './topSaleProductsConfig'

import * as styles from './TopSaleProductsStyles'

export const TopSaleProducts = () => {
    const router = useRouter()

    const goToSale = () => {
        router.push('/products/sale')
    }

    return (
        <Container sx={styles.Container}>
            <Box sx={styles.TopSaleProductsGrid}>
                {topSaleProducts.map((product, index) => {
                    const position = styles.gridArea[index + 1]
                    return (
                        <Box
                            onClick={goToSale}
                            key={product.id}
                            sx={styles.getTopSaleProductsGridItem(position)}
                        >
                            <Box>
                                <Typography
                                    sx={styles.Category(position)}
                                    variant='h6'
                                >
                                    {product.label}
                                </Typography>
                                <Typography
                                    sx={styles.Sale(position)}
                                    variant='h2'
                                >
                                    Big Sale
                                </Typography>
                                <Typography
                                    sx={styles.Discount(position)}
                                    variant='h3'
                                >
                                    Up to 50%
                                </Typography>
                                <Button sx={styles.Button} onClick={goToSale}>
                                    Shop Now
                                </Button>
                            </Box>

                            <Box sx={styles.ImageBox(position)}>
                                <Image
                                    alt={product.img}
                                    src={product.img}
                                    layout='fill'
                                />
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Container>
    )
}
