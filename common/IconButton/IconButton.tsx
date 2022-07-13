import React, {forwardRef} from 'react';
import MuiIconButton, {IconButtonProps} from '@mui/material/IconButton'

export const IconButton = forwardRef<HTMLElement, IconButtonProps>((props,  ref) => {
    return (
        <MuiIconButton {...props}>
            {props.children}
        </MuiIconButton>
    );
})
