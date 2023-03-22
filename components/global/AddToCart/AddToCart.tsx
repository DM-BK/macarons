import React, { MouseEvent } from 'react'
import { Box, IconButton, Tooltip } from '@common'
import toast from 'react-hot-toast'

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import * as styles from './AddToCartStyles'
import { addItem, removeItem } from '../../../store/features/cart/CartSlice'

interface AddToCartProps {
  id: number
}

export const AddToCart = ({ id }: AddToCartProps) => {
  const productsCount = useAppSelector((state) => state.cart.cartItems[id])
  const dispatch = useAppDispatch()

  const handleAddItem = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    dispatch(addItem(id))
    toast.success('Item has added to the cart')
  }
  const handleRemoveItem = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    dispatch(removeItem(id))
    toast.error('Item has removed from the cart')
  }

  return (
    <Box sx={styles.AddToCart}>
      {productsCount > 0 ? (
        <Tooltip title={'Remove Item'} placement={'top'}>
          <div>
            <IconButton onClick={handleRemoveItem} sx={styles.Icon}>
              <RemoveShoppingCartOutlinedIcon />
            </IconButton>
          </div>
        </Tooltip>
      ) : (
        <Tooltip title={'Add Item'} sx={{ position: 'relative' }}>
          <div>
            <IconButton onClick={handleAddItem} sx={styles.Icon}>
              <AddShoppingCartOutlinedIcon />
            </IconButton>
          </div>
        </Tooltip>
      )}
    </Box>
  )
}
