import React from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form'
import {Box, Typography, Rating, TextField, Button, Form} from '@common'

import * as styles from './ProductReviewFormStyles'

type FormValues = {
    rating: number
    messageBody: string
}

export const ProductReviewForm = () => {
    const {control, handleSubmit, reset, formState: {errors, isValid}} = useForm<FormValues>({
        defaultValues: {
            rating: 5,
            messageBody: ''
        },
        mode: 'all'
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
        reset()
    }

    return (
        <Box sx={styles.ProductsReviewFormBox}>
            <Typography variant={'h2'} sx={styles.ProductsReviewFormTitle}>Write a Review for this
                product</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.ProductsReviewFormRatingBox}>
                    <Box sx={styles.ProductsReviewFormRatingLegendBox}>
                        <Typography component={'legend'} sx={styles.ProductsReviewFormLegendText}>Your
                            Rating</Typography>
                        <Typography component={'legend'} sx={styles.ProductsReviewFormLegendStart}>*</Typography>
                    </Box>

                    <Controller
                        name={'rating'}
                        control={control}
                        render={({field}) => (
                            <Rating precision={0.5} {...field}/>
                        )}
                    />
                </Box>
                <Box>
                    <Box sx={{display: 'flex', gap: '3px', mb: '12px'}}>
                        <Typography component={'legend'} sx={styles.ProductsReviewFormLegendText}>Your
                            Review</Typography>
                        <Typography component={'legend'} sx={styles.ProductsReviewFormLegendStart}>*</Typography>
                    </Box>
                    <Controller
                        name={'messageBody'}
                        control={control}
                        rules={{required: {value: true, message: 'Required'}}}
                        render={({field}) => (
                            <TextField
                                sx={styles.ProductsReviewFormInput}
                                multiline
                                rows={6}
                                error={!!errors.messageBody}
                                helperText={errors.messageBody?.message}
                                placeholder={'Write a review here...'}
                                {...field}
                            />
                        )}
                    />
                    <Button
                        sx={styles.ProductsReviewFormButton}
                        disabled={!isValid}
                        type={'submit'}>Submit</Button>
                </Box>
            </Form>
        </Box>
    );
};