import React from 'react'
import { useRouter } from 'next/router'

import { Box, Container, Typography, Button, Image } from '@common'

import { topSaleProducts, gridArea } from './topSaleProductsConfig'

import * as styles from './TopSaleProductsStyles'

export const TopSaleProducts = () => {
    const router = useRouter()

    const goToSale = () => {
        router.push('/products/sale')
    }

    return (
        <Container sx={styles.Container}>
            <Box sx={styles.TopSaleProductsGrid}>
                {topSaleProducts.map((product, index) => (
                    <Box
                        className={gridArea[index + 1]}
                        key={product.id}
                        sx={styles.getTopSaleProductsGridItem(
                            gridArea[index + 1]
                        )}
                    >
                        <Box>
                            <Typography className='label' variant='h6'>
                                {product.label}
                            </Typography>
                            <Typography className='sale' variant='h1'>
                                Big Sale
                            </Typography>
                            <Typography className='up-to' variant='h3'>
                                Up to 50%
                            </Typography>
                            <Button className='button' onClick={goToSale}>
                                Shop Now
                            </Button>
                        </Box>

                        <Box className='image-box'>
                            <Image
                                alt={product.img}
                                src={product.img}
                                layout='fill'
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}
