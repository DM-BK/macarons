import React, {useRef, useState} from 'react';
import {Navigation} from "swiper";
import {Container, Typography, Slider, SliderItem} from "@common";
import Portal from '@mui/material/Portal'

import * as styles from './ProductsSectionStyles'
import {ArrowSliderButton} from './ArrowSliderButton'
import {ProductsItem} from './ProductsItem';
import {ProductType} from "../../../products/productsConfig";

interface ProductsSectionProps {
    title: string
    description: string
    config: ProductType[]
}

export const ProductsSection = ({title, description, config}: ProductsSectionProps) => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

    const startRef = useRef(true)
    const endRef = useRef(false)

    return (
        <Container maxWidth={'lg'} sx={styles.ProductContainerStyles}>
            <Typography variant={'h3'} sx={styles.ProductsSectionTitle}>{title}</Typography>
            <Typography sx={styles.ProductsSectionDesc}>{description}</Typography>
            <Slider
                spaceBetween={30}
                navigation={{
                    prevEl,
                    nextEl
                }}
                onTouchEnd={(swiper) => {
                    if (swiper.isEnd && !endRef.current) endRef.current = true
                    if (swiper.isBeginning && !startRef.current) startRef.current = true

                    if (!swiper.isBeginning && startRef.current) startRef.current = false
                    if (!swiper.isEnd && endRef.current) endRef.current = false
                }}
                speed={500}
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
                <>
                    {config.map(product => (
                            <SliderItem key={product.id}>
                                <ProductsItem
                                    id={product.id}
                                    img={product.img}
                                    label={product.label}
                                    currentPrice={product.currentPrice}
                                    oldPrice={product.oldPrice}
                                    isNew={product.isNew}
                                    discount={product.discount}
                                    isSwiper
                                />
                            </SliderItem>
                        )
                    )}
                </>
                <ArrowSliderButton startRef={startRef} endRef={endRef} ref={node => setPrevEl(node)} prev/>
                <ArrowSliderButton startRef={startRef} endRef={endRef} ref={node => setNextEl(node)} next/>
            </Slider>
        </Container>
    )
};