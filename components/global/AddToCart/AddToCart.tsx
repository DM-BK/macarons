import React, {forwardRef, useEffect, useRef} from 'react';
import {Box, IconButton, Tooltip} from '@common'
import {motion, useAnimation} from 'framer-motion'

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import * as styles from './AddToCartStyles'
import {addItem, removeItem} from "../../../store/features/cart/CartSlice";

interface AddToCartProps {
    id: number
}

export const AddToCart = forwardRef<HTMLElement, AddToCartProps>(({id}) => {
    const add = useAnimation()
    const remove = useAnimation()
    const productsCount = useAppSelector(state => state.cart.cartItems[id])
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLElement | null>(null)


    const handleAddProduct = async () => {
        const cartRect = document.getElementById('badge')?.getBoundingClientRect()
        console.log(cartRect, 'cart')
        const circleRect = ref.current?.getBoundingClientRect()
        console.log(circleRect, 'circle')
        const x = cartRect?.left! - circleRect?.left! + 30
        const y = cartRect?.top! - circleRect?.top! - 8

        await add.start({
            opacity: [1, 1, 1, 0],
            x,
            y,
            transition: {
                duration: 1,

            }
        })
        dispatch(addItem(Number(id)))
    }

    const handleSubtractProduct = () => {
        remove.start({
            opacity: [0, 0, 1, 1, 0, 0],
            x: 0,
            y: 0,
            transition: {
                duration: 1
            }
        })
        if (productsCount < 1) return
        dispatch(removeItem(Number(id)))
    }

    console.log(productsCount)

    // useEffect(() => {
    //     if(productsCount < 1){
    //         remove.start({
    //             opacity: [0, 0, 1, 1, 0, 0],
    //             x: 0,
    //             y: 0,
    //             transition: {
    //                 duration: 1
    //             }
    //         })
    //     }
    // }, [productsCount])


    return (
        <Box sx={styles.AddToCart}>
            {productsCount > 0
                ? <Tooltip title={'Remove Item'} placement={'top'}>
                    <div>
                        <IconButton onClick={handleSubtractProduct} sx={styles.Icon}>
                            <RemoveShoppingCartOutlinedIcon/>
                        </IconButton>
                    </div>
                </Tooltip>
                : <Tooltip title={'Add Item'} sx={{position: 'relative'}}>
                    <div>
                        <IconButton onClick={handleAddProduct} sx={styles.Icon}>
                            <AddShoppingCartOutlinedIcon/>
                        </IconButton>
                    </div>
                </Tooltip>
            }
            <Box
                ref={ref}
                component={motion.div}
                initial={{
                    opacity: 0,
                }}
                animate={productsCount > 0 ? remove : add}
                sx={{
                    position: 'relative',
                    width: '15px',
                    height: '15px',
                    bgcolor: 'primary.main',
                    borderRadius: '50%',
                    zIndex: '10000'
                }}
            >

            </Box>
        </Box>
    );
})