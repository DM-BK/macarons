import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles'

import {Box} from "@common";
import {Footer} from "@components/Footer";
import {Header} from "@components/Header";
import GlobalStyles, {AppBoxStyles, Main, theme} from "../components/global/GlobalStyles";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <ThemeProvider theme={theme}>
            <Box sx={AppBoxStyles}>
                <GlobalStyles/>
                <Header/>
                <Main>
                    <Component {...pageProps}/>
                </Main>
                <Footer/>
            </Box>
        </ThemeProvider>
    </>
}

export default MyApp
