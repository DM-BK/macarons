import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles'
import Header from "../components/header/Header";
import {Footer} from "@components/footer";
import GlobalStyles, {AppBoxStyles, Main, theme} from "../components/global/GlobalStyles";
import {Container, Box} from "@common";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <ThemeProvider theme={theme}>
            <Box sx={AppBoxStyles}>
                <GlobalStyles/>
                <Header/>
                <Main>
                    <Container maxWidth={'lg'}>
                        <Component {...pageProps}/>
                    </Container>
                </Main>
                <Footer/>
            </Box>
        </ThemeProvider>
    </>
}

export default MyApp
