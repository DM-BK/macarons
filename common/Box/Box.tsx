import React, {forwardRef} from 'react';
import MuiBox, {BoxProps as MuiBoxProps} from '@mui/material/Box'
import {AnimationProps} from 'framer-motion'

type BoxProps = AnimationProps & MuiBoxProps

export const Box = forwardRef<HTMLElement, BoxProps>((
    {
        children,
        sx = {},
        component = 'div',
        onClick,
        ...rest
    }, ref) => {

    return (
        <MuiBox sx={sx} component={component} onClick={onClick} ref={ref} {...rest}>
            {children}
        </MuiBox>
    );
})
