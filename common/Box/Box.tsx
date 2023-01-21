import React, {ElementType, forwardRef, ReactNode} from 'react';
import MuiBox from '@mui/material/Box'
import { SxProps, Theme } from '@mui/material';

interface BoxProps {
    children: ReactNode,
    sx?: SxProps<Theme>,
    component?: ElementType,
    onClick?: any,
}

export const Box = forwardRef<HTMLElement, BoxProps>((
    {
        children,
        sx = {},
        component = 'div',
        onClick
    }, ref) => {

    return (
        <MuiBox sx={sx} component={component} onClick={onClick} ref={ref}>
            {children}
        </MuiBox>
    );
})
