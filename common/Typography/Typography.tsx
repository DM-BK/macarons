import {ElementType} from "react";
import MuiTypography, {TypographyProps as MuiTypographyProps,} from '@mui/material/Typography'

interface TypographyProps extends MuiTypographyProps {
    component?: any //?????
}

export const Typography = ({children, variant, sx, component}: TypographyProps) => {

    return (
        <MuiTypography variant={variant} sx={sx} component={component}>
            {children}
        </MuiTypography>
    );
};
