import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles'

import {Container, Box} from "@common";
import {Footer} from "@components/Footer";
import {Header} from "@components/Header";
import GlobalStyles, {AppBoxStyles, Main, theme} from "../components/Global/GlobalStyles";

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
