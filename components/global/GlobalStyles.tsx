import MuiGlobalStyles, {GlobalStylesProps} from '@mui/material/GlobalStyles'
import {createTheme, styled} from '@mui/material/styles'

export const Main = styled('main')`
  flex: 2;
  display: flex;
  flex-direction: column;
`

export const AppBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
}

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
        'body': {
            color: '#2B3445'
        },
        '.toast': {
            minWidth: '300px',
            '& div:nth-of-type(2)': {
                justifyContent: 'start'
            }
        }
    }

    return (
        <MuiGlobalStyles styles={styles}/>
    );
};

export default GlobalStyles;
