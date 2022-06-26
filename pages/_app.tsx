import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material'
import Header from "../components/header/Header";
import GlobalStyles, {theme} from "../components/global/GlobalStyles";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Header/>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
}

export default MyApp
