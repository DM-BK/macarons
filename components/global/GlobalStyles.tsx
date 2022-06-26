import {GlobalStyles as Global, createTheme} from '@mui/material'

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1440
        }
    }
})

const GlobalStyles = () => {

    const styles = {
        'html': {
            'scroll-behavior': 'smooth'
        }
    }

    return (
        <Global styles={styles}/>
    );
};

export default GlobalStyles;