import React, {useState, useEffect} from 'react';
import {Box, Drawer, IconButton, Image, Typography, Badge} from '@common'
import {CartItem} from "@components/global/Cart/CartItem";

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {useAppSelector} from "../../../hooks/redux";

import * as styles from './CartStyles'
import {allProducts} from "../../../products/productsConfig";

export const Cart = () => {
    const {cartItems, totalQuantity} = useAppSelector(state => state.cart)
    const [isAnimate, setIsAnimate] = useState(false)

    const itemsId: string[] = Object.keys(cartItems)
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        if (itemsId.length > 0 && !isAnimate) {
            setIsAnimate(true)
            setTimeout(() => {
                setIsAnimate(state => !state)
            }, 1000)
        }
    }, [itemsId.length])

    return (
        <>
            <Badge
                id={'cart'}
                badgeContent={totalQuantity}
                color={'primary'}
                sx={{
                    '.MuiBadge-badge': {
                        color: '#fff'
                    },
                }}
            >
                <IconButton id={'cartIcon'} onClick={handleOpen} sx={styles.IconButton(isAnimate)}>
                    <ShoppingBagOutlinedIcon sx={styles.Icon(isAnimate)} />
                </IconButton>
            </Badge>
            <Drawer
                sx={styles.CartDrawer}
                open={open}
                anchor={'right'}
                onClose={handleClose}
            >
                <Box sx={styles.DrawerHeader}>
                    <ShoppingBagOutlinedIcon sx={styles.HeaderIcon}/>
                    <Typography
                        sx={styles.HeaderText}>{totalQuantity} item{totalQuantity > 1 ? 's' : ''}</Typography>
                    <IconButton sx={styles.HeaderCloseIcon} onClick={handleClose}>
                        <CloseOutlinedIcon/>
                    </IconButton>
                </Box>
                {totalQuantity > 0
                    ? (
                        <Box>
                            {itemsId.map(itemId => (
                                <CartItem key={itemId} id={itemId} product={allProducts[Number(itemId)]}/>
                            ))}
                        </Box>
                    )
                    : (
                        <Box sx={styles.EmptyCartBox}>
                            <Image
                                src={'/shopping-bag.svg'}
                                width={100}
                                height={100}
                                alt={'shopping-bah'}
                            />
                            <Typography sx={styles.EmptyCartText}>
                                Your shopping bag is empty. <br/> Start shopping
                            </Typography>
                        </Box>
                    )
                }
            </Drawer>
        </>
    );
};