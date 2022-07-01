import React, {useEffect, useState} from 'react';
import {Navigation} from "swiper";
import {Container, Typography, Slider, SliderItem} from "@common";

import * as styles from './ProductsStyles'
import {ArrowSliderButton} from './ArrowSliderButton'
import {ProductsItem} from './ProductItem';

export const ProductsSection = () => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

    return (
        <Container maxWidth={'lg'} sx={styles.ProductContainerStyles}>
            <Typography variant={'h3'} sx={styles.ProductsSectionTitle}>Top New Product</Typography>
            <Typography sx={styles.ProductsSectionDesc}>Tall bind but were, been folks not the expand</Typography>
            <Slider
                spaceBetween={30}
                // loop
                navigation={{
                    prevEl,
                    nextEl
                }}
                slidesPerView={1}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    920: {
                        slidesPerView: 3
                    },
                }}
                modules={[Navigation]}
            >
                <SliderItem>
                    <ProductsItem/>
                </SliderItem>
                <SliderItem>
                    <ProductsItem/>
                </SliderItem>
                <SliderItem>
                    <ProductsItem/>
                </SliderItem>
                <SliderItem>
                    <ProductsItem/>
                </SliderItem>
                <SliderItem>
                    <ProductsItem/>
                </SliderItem>
                <SliderItem>
                    <ProductsItem/>
                </SliderItem>
                <SliderItem>
                    <ProductsItem/>
                </SliderItem>
                <SliderItem>
                    <ProductsItem/>
                </SliderItem>
            </Slider>
            <ArrowSliderButton ref={node => setPrevEl(node)} prev/>
            <ArrowSliderButton ref={node => setNextEl(node)}/>
        </Container>
    )
};