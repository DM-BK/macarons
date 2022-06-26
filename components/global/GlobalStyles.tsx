import Global from '@mui/material/GlobalStyles'
import {createTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import {GlobalStylesProps} from '@mui/material/GlobalStyles'
import {styled} from '@mui/material/styles'

export const Main = styled('main')`
  flex: 2;
`

export const AppWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1440
        }
    },
    palette: {
        primary: {
            main: '#4BB4B4'
        },
        secondary: {
            main: '#fff'
        }
    }
})

const GlobalStyles = () => {

    const styles: GlobalStylesProps['styles'] = {
        'html': {
            scrollBehavior: 'smooth'
        }
    }

    return (
        <Global styles={styles}/>
    );
};

export default GlobalStyles;
