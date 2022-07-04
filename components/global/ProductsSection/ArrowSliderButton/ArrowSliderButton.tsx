import React, {forwardRef} from 'react';
import {useSwiper} from 'swiper/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {Box} from "@common";

import * as styles from './ArroSliderButtonStyles'

interface ArrowButtonSliderProps {
    prev?: boolean
    next?: boolean
    startRef: {
        current: boolean
    }
    endRef: {
        current: boolean
    }
}

type RefType = HTMLElement

export const ArrowSliderButton = forwardRef<RefType, ArrowButtonSliderProps>((
    {
        prev= false,
        next,
        startRef,
        endRef
    }, ref) => {
    const swiper = useSwiper()

    const handleReturnEdgeElement = () => {
        if (!swiper.isBeginning && startRef.current) startRef.current = false
        if (!swiper.isEnd && endRef.current) endRef.current = false

        if (swiper.isEnd && !endRef.current) endRef.current = true
        else if (next && endRef.current) {
            startRef.current = true
            endRef.current = false
            swiper.slideTo(0)
        }

        if (swiper.isBeginning && !startRef.current) startRef.current = true
        else if (prev && startRef.current) {
            startRef.current = false
            endRef.current = true
            swiper.slideTo(5)
        }
    }

    return (
        <Box sx={styles.getArrowSliderButton(prev)} ref={ref} onClick={handleReturnEdgeElement}>
            {prev
                ? <ArrowBackIcon sx={{color: 'primary.main'}}/>
                : <ArrowForwardIcon sx={{color: 'primary.main'}}/>
            }
        </Box>
    );
})