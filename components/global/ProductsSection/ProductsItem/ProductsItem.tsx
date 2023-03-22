import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Box, Typography, Image, Item } from '@common'

import * as styles from './ProductsItemStyles'
import { AddToCart } from '@components/global/AddToCart'

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
  onClick: () => void
}

const Wrapper = ({ children, isSwiper, onClick }: WrapperProps) => {
  if (isSwiper) {
    return <Box sx={styles.ProductsItemOuter} onClick={onClick}>{children}</Box>
  }

  return (
    <Item item xs={12} md={6} lg={4}>
      <Box sx={styles.ProductsItemOuter} onClick={onClick}>{children}</Box>
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
  const router = useRouter()

  const handleRouteChange = (path: string) => () => router.push(path)

  return (
    <Wrapper isSwiper={isSwiper} onClick={handleRouteChange(`/products/${id}`)}>
      <Box sx={styles.ProductsItemTopInner}>
        <Box>
          <Box sx={styles.ProductsItemDiscount}>{discount}% off</Box>
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
      <Box sx={styles.ProductsItemBottom}>
        <Box sx={styles.ProductsItemBottomLeft}>
          <Typography variant={'h3'} sx={styles.ProductsItemLinkBottomText}>
            {label}
          </Typography>
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
