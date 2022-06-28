import React  from 'react';
import {BoxStyled} from "@common/Box/BoxStyled";
import {BoxProps} from '@mui/material/Box'



export const Box = ({children, sx = {}, component = 'div', onClick}: BoxProps) => {

    return (
        <BoxStyled sx={sx} component={component} onClick={onClick}>
            {children}
        </BoxStyled>
    );
};
