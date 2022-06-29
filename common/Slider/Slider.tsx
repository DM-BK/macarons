import React from 'react';
import {Swiper, SwiperProps} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

export const Slider = ({children, ...rest}: SwiperProps) => {
    return (
        <Swiper {...rest}>
            {children}
        </Swiper>
    );
};