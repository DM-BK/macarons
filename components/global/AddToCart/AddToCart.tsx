import React, {forwardRef, useEffect} from 'react';
import {Box, IconButton, Tooltip} from '@common'

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import * as styles from './AddToCartStyles'
import {addItem, removeItem} from "../../../store/features/cart/CartSlice";

interface AddToCartProps {
    id: number
}

export const AddToCart = forwardRef<HTMLElement, AddToCartProps>(({id}) => {
    const productsCount = useAppSelector(state => state.cart.cartItems[id])
    const dispatch = useAppDispatch()

    const handleAddItem = () => dispatch(addItem(id))
    const handleRemoveItem = () => dispatch(removeItem(id))

    return (
        <Box sx={styles.AddToCart}>
            {productsCount > 0
                ? <Tooltip title={'Remove Item'} placement={'top'}>
                    <div>
                        <IconButton onClick={handleRemoveItem} sx={styles.Icon}>
                            <RemoveShoppingCartOutlinedIcon/>
                        </IconButton>
                    </div>
                </Tooltip>
                : <Tooltip title={'Add Item'} sx={{position: 'relative'}}>
                    <div>
                        <IconButton onClick={handleAddItem} sx={styles.Icon}>
                            <AddShoppingCartOutlinedIcon/>
                        </IconButton>
                    </div>
                </Tooltip>
            }
        </Box>
    );
})