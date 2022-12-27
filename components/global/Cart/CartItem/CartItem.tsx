import React from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import {Box, Image, IconButton, Typography} from '@common'
import {AddRemoveItem} from "@components/global/AddRemoveItem";
import {ProductType} from "../../../../products/productsConfig";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";

import * as styles from './CartItemStyles'
import {deleteItem} from "../../../../store/features/cart/CartSlice";

interface CartItemProps {
    id: string
    product: ProductType
}

export const CartItem = ({id, product}: CartItemProps) => {
    const dispatch = useAppDispatch()
    const productQuantity = useAppSelector(state => state.cart.cartItems[id])
    const {img, currentPrice, label} = product

    const handleDeleteItem = () => dispatch(deleteItem(Number(id)))

    return (
        <Box sx={styles.CartItem}>
            <AddRemoveItem id={id}/>
            <Box sx={styles.Image}>
                <Image
                    src={img}
                    width={76}
                    height={76}
                    alt={label}
                />
            </Box>
            <Box sx={styles.TextBox}>
                <Typography variant={'h5'} sx={styles.Label}>{label}</Typography>
                <Typography sx={styles.Quantity}>${currentPrice} x {productQuantity}</Typography>
                <Typography sx={styles.TotalPrice}>${currentPrice * productQuantity}</Typography>
            </Box>
            <IconButton color={'primary'} onClick={handleDeleteItem}>
                <DeleteOutlineOutlinedIcon/>
            </IconButton>
        </Box>
    );
};
