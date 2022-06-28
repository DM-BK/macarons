import React, {ReactNode} from 'react';
import {TypographyStyled} from "./TypographyStyled";

interface TypographyProps {
    children: ReactNode
}

export const Typography = ({children}: TypographyProps) => {
    return (
        <TypographyStyled>
            {children}
        </TypographyStyled>
    );
};