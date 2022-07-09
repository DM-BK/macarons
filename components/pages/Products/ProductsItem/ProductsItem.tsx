import React, {SyntheticEvent, useState} from 'react';

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {FreeMode, Thumbs} from "swiper";

import {Box, Container, Image, Typography, Rating, Button, variantButton, Slider, SliderItem, Tabs, Tab} from "@common";
import {ProductDescription} from "@components/pages/Products/ProductsItem/ProductDescription/ProductDescription";
import {ProductsReview} from "@components/pages/Products/ProductsItem/ProductsReview";
import {HotProducts} from "@components/global/HotProducts/HotProducts";

import * as styles from './ProductsItemStyles'

import {ProductType} from "../../../../products/productsConfig";

export const ProductsItem = ({img, oldPrice, currentPrice, label}: ProductType) => {
    const [productQuantity, setProductQuantity] = useState(0)
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
    const [tubsValue, setTabsValue] = useState('description')
    const isOldPrice = true

    const handleAddProduct = () => setProductQuantity(prev => prev + 1)
    const handleRemoveProduct = () => setProductQuantity(prev => prev - 1)

    const handleTabsChange = (event: SyntheticEvent, newValue: string) => setTabsValue(newValue)

    return (
        <Box sx={styles.ProductsItemWrapper}>
            <Container maxWidth={'xl'}>
                <Box sx={styles.ProductsItemHeader}>
                    <Box sx={styles.ProductsItemImagesBox}>
                        <Box sx={styles.ProductsItemBigImagesBox}>
                            <Slider
                                spaceBetween={10}
                                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                modules={[FreeMode, Thumbs]}
                                allowTouchMove={false}
                                // className="mySwiper2"
                            >
                                <SliderItem>
                                    <Image
                                        src={img}
                                        alt={label}
                                        height={300}
                                        width={300}
                                        objectFit={'contain'}
                                    />
                                </SliderItem>
                                <SliderItem>
                                    <Image
                                        src={img}
                                        alt={label}
                                        height={300}
                                        width={300}
                                        objectFit={'contain'}
                                    />
                                </SliderItem>
                                <SliderItem>
                                    <Image
                                        src={img}
                                        alt={label}
                                        height={300}
                                        width={300}
                                        objectFit={'contain'}
                                    />
                                </SliderItem>
                                <SliderItem>
                                    <Image
                                        src={img}
                                        alt={label}
                                        height={300}
                                        width={300}
                                        objectFit={'contain'}
                                    />
                                </SliderItem>
                            </Slider>
                        </Box>
                        <Box sx={styles.ProductsItemSmallImagesBox}>
                            <Slider
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={3}
                                allowTouchMove={true}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Thumbs]}
                            >
                                <SliderItem>
                                    <Box sx={styles.ProductsItemSmallImage}>
                                        <Image
                                            src={img}
                                            alt={label}
                                            height={40}
                                            width={40}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                </SliderItem>
                                <SliderItem>
                                    <Box sx={styles.ProductsItemSmallImage}>
                                        <Image
                                            src={img}
                                            alt={label}
                                            height={40}
                                            width={40}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                </SliderItem>
                                <SliderItem>
                                    <Box sx={styles.ProductsItemSmallImage}>
                                        <Image
                                            src={img}
                                            alt={label}
                                            height={40}
                                            width={40}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                </SliderItem>
                                <SliderItem>
                                    <Box sx={styles.ProductsItemSmallImage}>
                                        <Image
                                            src={img}
                                            alt={label}
                                            height={40}
                                            width={40}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                </SliderItem>
                            </Slider>
                        </Box>
                    </Box>
                    <Box sx={styles.ProductsItemInformation}>
                        <Typography variant={'h1'} sx={styles.ProductsItemLabel}>{label}</Typography>
                        <Typography sx={styles.ProductsItemBrand}>Brand</Typography>
                        <Box sx={styles.ProductsItemRateBox}>
                            <Typography sx={styles.ProductsItemRateLabel}>Rated:</Typography>
                            <Rating value={4} readOnly size={'small'}/>
                            <Typography sx={styles.ProductsItemRateFeedback}>(50)</Typography>
                        </Box>
                        <Box sx={styles.ProductsItemPriceBox}>
                            <Typography variant={'h2'} color={'primary'}
                                        sx={styles.ProductsItemCurrentPrice}>{currentPrice}$</Typography>
                            {isOldPrice && <Typography sx={styles.ProductsItemOldPrice}>{oldPrice}$</Typography>}
                        </Box>
                        <Typography sx={styles.ProductsItemAvailableLabel}>Stock available</Typography>
                        <Box>
                            {productQuantity > 0
                                ? <Box sx={styles.ProductsItemAddRemoveBox}>
                                    <Button
                                        onClick={handleRemoveProduct}
                                        sx={styles.ProductsItemAddRemoveBtn}
                                        color={'primary'}
                                        variant={variantButton.outlined}
                                    >
                                        <RemoveIcon fontSize={'small'}/>
                                    </Button>
                                    <Typography
                                        sx={styles.ProductsItemQuantity}>{productQuantity < 10 ? `0${productQuantity}` : productQuantity}</Typography>
                                    <Button
                                        onClick={handleAddProduct}
                                        sx={styles.ProductsItemAddRemoveBtn}
                                        color={'primary'}
                                        variant={variantButton.outlined}
                                    >
                                        <AddIcon fontSize={'small'}/>
                                    </Button>
                                </Box>
                                : <Button
                                    onClick={handleAddProduct}
                                    color={'primary'}
                                    sx={styles.ProductsItemAddToCartBtn}>Add to Cart</Button>
                            }
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Tabs value={tubsValue} onChange={handleTabsChange}
                          sx={{mb: 3, mt: 10, borderBottom: 1, borderColor: 'divider'}}>
                        <Tab label={'Description'} value={'description'} sx={{textTransform: 'unset'}}/>
                        <Tab label={'Review'} value={'review'} sx={{textTransform: 'unset'}}/>
                    </Tabs>

                    {tubsValue === 'description' && <ProductDescription/>}
                    {tubsValue === 'review' && <ProductsReview/>}
                </Box>
                <Box sx={styles.ProductsItemHotProductsBox}>
                    <HotProducts/>
                </Box>
            </Container>
        </Box>
    );
};