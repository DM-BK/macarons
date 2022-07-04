import {ContainerProps as MuiContainerProps} from '@mui/material/Container'
import {ContainerStyled} from "@common/Container/ContainerStyled";

export interface ContainerProps extends MuiContainerProps {

}

export const Container = ({children, sx, maxWidth}: ContainerProps) => {
    return (
        <ContainerStyled sx={sx} maxWidth={maxWidth}>
            {children}
        </ContainerStyled>
    );
};
