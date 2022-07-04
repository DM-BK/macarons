import React from 'react';
import {Pagination} from "swiper";
import {Box, SliderItem, Slider} from "@common";
import * as styles from "./SliderSectoinStyles";
import {SliderItemContent} from "./SliderItemContent";

export const SliderSection = () => {
    return (
        <Box sx={styles.SliderOuterBox}>
            <Slider
                slidesPerView={1}
                loop
                speed={600}
                modules={[Pagination]}
                pagination={{clickable: true}}
            >
                <SliderItem>
                    <SliderItemContent/>
                </SliderItem>
                <SliderItem>
                    <SliderItemContent/>
                </SliderItem>
                <SliderItem>
                    <SliderItemContent/>
                </SliderItem>
            </Slider>
        </Box>
    );
};