import React from 'react'
import { useRouter } from 'next/router'

import { Box, Container, Typography, Button, Image } from '@common'
import { NavigationByCategories } from '@components/global/NavigationByCategories'

import { categorySectionConfig } from './categorySectionConfig'

import * as styles from './CategorySectionStyles'

export const CategorySection = () => {
  const router = useRouter()

  const goToSale = () => {
    router.push('/products/sale')
  }

  return (
    <Container sx={styles.Container}>
      <Box sx={styles.Navigation}>
        <NavigationByCategories />
      </Box>
      <Box sx={styles.TopSaleProductsGrid}>
        {categorySectionConfig.map((product, index) => {
          const position = styles.gridArea[index + 1]
          return (
            <Box
              onClick={goToSale}
              key={product.id}
              sx={styles.getTopSaleProductsGridItem(position)}
            >
              <Box>
                <Typography sx={styles.Category(position)} variant='h6'>
                  {product.label}
                </Typography>
                <Typography sx={styles.Sale(position)} variant='h2'>
                  Big Sale
                  {/* add to config */}
                </Typography>
                <Typography sx={styles.Discount(position)} variant='h3'>
                  Up to 50%
                  {/* add to config */}
                </Typography>
                <Button sx={styles.Button} onClick={goToSale}>
                  Shop Now 
                  {/* add to config */}
                </Button>
              </Box>

              <Box sx={styles.ImageBox(position)}>
                <Image alt={product.img} src={product.img} layout='fill' />
              </Box>
            </Box>
          )
        })}
      </Box>
    </Container>
  )
}
