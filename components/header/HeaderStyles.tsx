import {ReactNode} from 'react'

import {styled} from '@mui/material/styles'
import Container from '@mui/material/Container'
import AppBar, {AppBarProps} from '@mui/material/AppBar'
import Box from '@mui/material/Box'

type CustomAppBarPropsType = {
    isAnimate: boolean
    children: ReactNode
} & AppBarProps

export const CustomAppBar = styled(({isAnimate, children, ...rest}: CustomAppBarPropsType) => <AppBar {...rest}>
    {children}
</AppBar>)`
  position: ${props => props.isAnimate ? 'fixed' : 'static'};
  top: ${({isAnimate}) => isAnimate ? '0' : '-64px'};
  transition: all .5s;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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

