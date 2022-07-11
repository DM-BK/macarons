import React, {useState} from 'react';
import {Container} from '@common'
import {SaleCategoryItem} from "@components/pages/Products/Sale/SaleCategories/SaleCategoryItem";

import * as styles from './SaleCategoriesStyles'

export const SaleCategories = () => {
    const [activeItem, setActiveItem] = useState(1)

    return (
        <Container sx={styles.Categories}>
            <SaleCategoryItem id={1} setActiveItem={setActiveItem} isActive={activeItem === 1}/>
            <SaleCategoryItem id={2} setActiveItem={setActiveItem} isActive={activeItem === 2}/>
            <SaleCategoryItem id={3} setActiveItem={setActiveItem} isActive={activeItem === 3}/>
            <SaleCategoryItem id={4} setActiveItem={setActiveItem} isActive={activeItem === 4}/>
        </Container>
    );
};