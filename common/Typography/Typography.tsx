import MuiTypography, {TypographyProps as MuiTypographyProps,} from '@mui/material/Typography'

interface TypographyProps extends MuiTypographyProps {
    component?: any
}

export const Typography = ({children, variant, sx, component, className}: TypographyProps) => {

    return (
        <MuiTypography variant={variant} sx={sx} component={component} className={className}>
            {children}
        </MuiTypography>
    );
};
