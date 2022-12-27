import React, {useState} from 'react';

import {Box, Container, Pagination, Typography} from '@common'
import {SaleCategories} from "@components/pages/Products/Sale/SaleCategories";
import {SaleItem} from "@components/pages/Products/Sale/SaleItem";

import * as styles from './SaleStyles'

const array = new Array(150).fill(1).map((value, index) => index)
const pageCount = Math.ceil(array.length / 28)

export const Sale = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(28)
    const [shownProducts, setShownProducts] = useState(array.slice(left, right))

    const handlePageChange = (event: any, newPage: number) => {
        const isLimit = pageCount === newPage
        const forLeft = 28 * (newPage - 1)
        const forRight = 28 * newPage

        setLeft(forLeft)

        if (isLimit) setRight(array.length)
        else setRight(forRight)

        setShownProducts(array.slice(forLeft, forRight))
    }

    return (
        <Box sx={styles.Sale}>
            <Container>
                <Box sx={styles.TitleBox}>
                    <Typography variant={'h1'} sx={styles.SaleTitle}><span>Flash Deals</span>, Enjoy Upto 80% discounts</Typography>
                </Box>
            </Container>
            <SaleCategories/>
            <Container sx={styles.SaleItemContainer}>
                {shownProducts.map(val => (
                    <SaleItem key={val} id={val}/>
                ))}
            </Container>
            <Container>
                <Box sx={styles.SalePaginationBox}>
                    <Typography
                        sx={styles.ItemsCount}>Showing {left + 1}-{right} of {array.length} products</Typography>
                    <Pagination
                        count={pageCount}
                        variant={'outlined'}
                        color={'primary'}
                        onChange={handlePageChange}
                    />
                </Box>
            </Container>
        </Box>
    );
};