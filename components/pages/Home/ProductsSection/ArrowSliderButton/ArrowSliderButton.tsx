import React, {forwardRef} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {Box} from "@common";

import * as styles from './ArroSliderButtonStyles'

interface ArrowButtonSliderProps {
    prev?: boolean
    next?: boolean
}

type RefType = HTMLElement

export const ArrowSliderButton = forwardRef<RefType, ArrowButtonSliderProps>(({prev = false}, ref) => {

    return (
        <Box sx={styles.getArrowSliderButton(prev)} ref={ref}>
            {prev
                ? <ArrowBackIcon sx={{color: 'primary.main'}}/>
                : <ArrowForwardIcon sx={{color: 'primary.main'}}/>
            }
        </Box>
    );
})