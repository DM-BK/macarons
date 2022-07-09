import React from 'react';
import MuiRating, {RatingProps} from '@mui/material/Rating'

export const Rating = ({name, value, onChange, disabled, readOnly, size, precision}: RatingProps) => {
    return (
        <MuiRating
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            readOnly={readOnly}
            size={size}
            precision={precision}
        />
    );
};