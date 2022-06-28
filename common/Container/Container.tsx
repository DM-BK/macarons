import React, {ReactNode} from 'react';
import {ContainerStyled} from "@common/Container/ContainerStyled";
import {SxProps} from '@mui/material/styles'

interface ContainerProps {
    children: ReactNode,
    maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    sx?: SxProps
}

export const Container = ({children, sx = {}, maxWidth}: ContainerProps) => {
    return (
        <ContainerStyled sx={sx} maxWidth={maxWidth}>
            {children}
        </ContainerStyled>
    );
};
