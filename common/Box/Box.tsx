import React, {forwardRef} from 'react';
import MuiBox, {BoxProps as MuiBoxProps} from '@mui/material/Box'

interface BoxProps extends MuiBoxProps {
    src?: string
    alt?: string
}

export const Box = forwardRef<HTMLElement, BoxProps>(({alt, src, children, sx = {}, component = 'div', onClick}, ref) => {

    return (
        <MuiBox sx={sx} component={component} onClick={onClick} ref={ref} src={src} alt={alt}>
            {children}
        </MuiBox>
    );
})
