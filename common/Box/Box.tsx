import React  from 'react';
import MuiBox, {BoxProps} from '@mui/material/Box'

export const Box = ({children, sx = {}, component = 'div', onClick}: BoxProps) => {

    return (
        <MuiBox sx={sx} component={component} onClick={onClick}>
            {children}
        </MuiBox>
    );
};
