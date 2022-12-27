import React from 'react';
import ChairIcon from '@mui/icons-material/Chair';

import {Box, Typography} from '@common'

import * as styles from './SaleCategoryItemStyles'

interface SaleCategoryItemProps {
    id: number
    setActiveItem: (id: number) => void
    isActive: boolean
}

export const SaleCategoryItem = ({id, setActiveItem, isActive}: SaleCategoryItemProps) => {
    const handleClick = () => setActiveItem(id)

    return (
        <Box sx={styles.Wrapper}><Box sx={styles.getCategoryItem(isActive)} onClick={handleClick}>
            <Box sx={styles.getDiscount(isActive)}>
                <Typography sx={styles.DiscountLabel}>Up to 40% off</Typography>
            </Box>
            <ChairIcon sx={styles.getIcon(isActive)}/>
            <Typography sx={styles.getLabel(isActive)}>Furniture</Typography>
        </Box></Box>
    );
};