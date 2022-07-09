import React from 'react';
import {Swiper, SwiperProps} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export const Slider = ({children, ...rest}: SwiperProps) => {
    return (
        <Swiper {...rest}>
            {children}
        </Swiper>
    );
};