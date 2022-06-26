import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import {styled} from '@mui/material/styles'

export const CustomFooter = styled('footer')`
  background-color: ${props => props.theme.palette.primary.main};
  padding: 30px 0;
  color: #fff;
`

export const FooterContainer = styled(Container)`
  display: flex;
  gap: 270px;
  align-items: center;
`

export const LeftSideBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  max-width: 40%;
`

export const SocialLinkWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const SocialLinkCircleBox = styled(Box)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .2);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightSideBox = styled(Box)`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`