import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {IconButton, Box, Typography} from '@common'

import * as styles from './AddRemoveItemStyles'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {addItem, removeItem} from "../../../store/features/cart/CartSlice";

interface AddRemoveItemProps {
    id: string
}

export const AddRemoveItem = ({id}: AddRemoveItemProps) => {
    const productsCount = useAppSelector(state => state.cart.cartItems[id])
    const dispatch = useAppDispatch()

    const handleAddProduct = () => {
        dispatch(addItem(Number(id)))
    }

    const handleSubtractProduct = () => {
        if (productsCount < 1) return
        dispatch(removeItem(Number(id)))
    }

    return (
        <Box sx={styles.AddRemove}>
            <IconButton
                color={'primary'}
                onClick={handleAddProduct}
                sx={styles.AddRemoveButton}
            >
                <AddIcon sx={styles.Icon}/>
            </IconButton>
            <Typography sx={styles.ProductsCount}>{productsCount}</Typography>
            <IconButton
                color={'primary'}
                onClick={handleSubtractProduct}
                sx={styles.AddRemoveButton}
                disabled={productsCount === 1}
            >
                <RemoveIcon sx={styles.Icon}/>
            </IconButton>
        </Box>
    );
};