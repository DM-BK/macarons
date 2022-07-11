import React from 'react';
import MuiPagination, {PaginationProps} from '@mui/material/Pagination'

export const Pagination = ({count, color, variant, disabled, onChange}: PaginationProps) => {
    return (
        <MuiPagination
            onChange={onChange}
            count={count}
            color={color}
            variant={variant}
            disabled={disabled}
        />
    );
};