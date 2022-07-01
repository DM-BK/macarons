import React, {forwardRef} from 'react';
import MuiBox, {BoxProps} from '@mui/material/Box'

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
