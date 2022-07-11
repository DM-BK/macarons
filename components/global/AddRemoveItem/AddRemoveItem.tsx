import React from 'react';

import {SxProps} from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {Button, Box, Typography} from '@common'

import * as styles from './AddRemoveItemStyles'

interface AddRemoveItemProps {
    productsCount: number
    handleSubtractProduct: () => void
    handleAddProduct: () => void,
    iconButton?: SxProps
    wrapper?: SxProps
    icon?: SxProps
}

export const AddRemoveItem = (
    {
        productsCount,
        handleAddProduct,
        handleSubtractProduct,
        iconButton,
        wrapper,
        icon
    }: AddRemoveItemProps) => {
    return (
        <Box sx={{...styles.AddRemove, ...wrapper}}>
            {
                productsCount > 0
                    ? <>
                        <Button
                            variant={'outlined'}
                            onClick={handleSubtractProduct}
                            sx={{...styles.AddRemoveButton, ...iconButton}}
                        >
                            <RemoveIcon sx={{...styles.Icon, ...icon}}/>
                        </Button>
                        <Typography sx={styles.ProductsCount}>{productsCount}</Typography>
                    </>
                    : null
            }
            <Button
                variant={'outlined'}
                onClick={handleAddProduct}
                sx={{...styles.AddRemoveButton, ...iconButton}}
            >
                <AddIcon sx={{...styles.Icon, ...icon}}/>
            </Button>
        </Box>
    );
};