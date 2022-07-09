import React, {forwardRef} from 'react';
import MuiRating, {RatingProps} from '@mui/material/Rating'

export const Rating = forwardRef(({name, value, onChange, disabled, readOnly, size, precision}: RatingProps, ref) => {
    return (
        <MuiRating
            name={name}
            value={Number(value)}
            onChange={onChange}
            disabled={disabled}
            readOnly={readOnly}
            size={size}
            precision={precision}
            ref={ref}
        />
    );
})