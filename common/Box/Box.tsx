import React, {ElementType, forwardRef, MouseEventHandler, ReactNode} from 'react';
import MuiBox from '@mui/material/Box'
import { SxProps, Theme } from '@mui/material';

interface BoxProps {
    children: ReactNode,
    sx?: SxProps<Theme>,
    component?: ElementType,
    onClick?: MouseEventHandler<HTMLDivElement>,
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
