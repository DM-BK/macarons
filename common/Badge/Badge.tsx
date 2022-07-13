import MuiBadge, {BadgeProps} from '@mui/material/Badge'
import React from 'react';

export const Badge = ({children, color, badgeContent, sx, ...rest}: BadgeProps) => {
    return (
        <MuiBadge color={color} badgeContent={badgeContent} sx={sx} {...rest}>
            {children}
        </MuiBadge>
    );
};