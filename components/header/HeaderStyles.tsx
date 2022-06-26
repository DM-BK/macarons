import {ReactNode} from 'react'

import {styled, StyledComponentProps} from '@mui/material/styles'
import {Box, AppBar} from '@mui/material'

type CustomAppBarProps = {
    isAnimate: boolean
    children: ReactNode
} & StyledComponentProps

export const CustomAppBar = styled(({isAnimate, children, ...rest}: CustomAppBarProps) => <AppBar {...rest}>
    {children}
</AppBar>)`
  position: ${props => props.isAnimate ? 'fixed' : 'static'};
  top: ${({isAnimate}) => isAnimate ? '0' : '-64px'};
  transition: all .5s
`

export const flexCenter = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

export const LinksBox = styled(Box)`
  display: none;
  gap: 20px;


  ${props => props.theme.breakpoints.up('md')} {
    display: flex;
  }
`

export const BurgerBox = styled(Box)`
  border: 1px solid rgba(255, 255, 255, .4);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`

