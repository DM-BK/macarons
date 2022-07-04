import MuiTypography, {TypographyProps} from '@mui/material/Typography'

export const Typography = ({children, variant, sx}: TypographyProps) => {
    return (
        <MuiTypography variant={variant} sx={sx}>
            {children}
        </MuiTypography>
    );
};