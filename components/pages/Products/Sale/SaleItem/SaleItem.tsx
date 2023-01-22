import React, {useState} from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {Box, Image, Typography, Rating, Link, IconButton} from '@common'

import * as styles from './SaleItemStyles'
import {AddToCart} from "@components/global/AddToCart";

interface SaleItemProps {
    id: number
}

export const SaleItem = ({id}: SaleItemProps) => {
    const [like, setLike] = useState(false)

    const handleLike = () => setLike(prev => !prev)

    return (
        <Box sx={styles.SaleItemWrapper}>
            <Box sx={styles.SaleItem}>
                <Box sx={styles.Top}>
                    <Link>
                        <Image
                            width={290}
                            height={290}
                            src={'/5.webp'}
                        />
                    </Link>
                    <Box sx={styles.Discount}>
                        <Typography sx={styles.DiscountLabel}>5% off</Typography>
                    </Box>
                    <Box sx={styles.LikeBox}>
                        <IconButton onClick={handleLike} size={'small'}>
                            {like
                                ? <FavoriteIcon sx={styles.FiledLike}/>
                                : <FavoriteBorderIcon sx={styles.LikeIcon}/>
                            }
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={styles.Bottom}>
                    <Box sx={styles.BottomLeft}>
                        <Link withoutStyles>
                            <Typography sx={styles.Label} variant={'h3'}>Capgnold WX-R</Typography>
                        </Link>
                        <Rating sx={styles.Rating} value={5} readOnly/>
                        <Box sx={styles.PriceBox}>
                            <Typography sx={styles.CurrentPrice}>$237.50</Typography>
                            <Typography sx={styles.OldPrice}>250.00</Typography>
                        </Box>
                    </Box>
                    <AddToCart id={id}/>
                </Box>
            </Box>
        </Box>
    );
};