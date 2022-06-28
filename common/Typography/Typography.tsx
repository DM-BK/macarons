import MuiTypography, {TypographyProps} from '@mui/material/Typography'

export const Typography = ({children}: TypographyProps) => {
    return (
        <MuiTypography>
            {children}
        </MuiTypography>
    );
};