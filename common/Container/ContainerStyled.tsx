import {styled} from '@mui/material/styles'
import Container from '@mui/material/Container'
import {ContainerProps} from './Container'

export const ContainerStyled = styled(Container)<ContainerProps>(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        maxWidth: '450px'
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '1024px'
    },
}))