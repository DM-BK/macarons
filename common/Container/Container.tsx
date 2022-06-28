import MuiContainer, {ContainerProps} from '@mui/material/Container'

export const Container = ({children, sx, maxWidth}: ContainerProps) => {
    return (
        <MuiContainer sx={sx} maxWidth={maxWidth}>
            {children}
        </MuiContainer>
    );
};
