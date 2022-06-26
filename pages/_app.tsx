import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import GlobalStyles, {AppWrapper, Main, theme} from "../components/global/GlobalStyles";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <ThemeProvider theme={theme}>
            <AppWrapper sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                <GlobalStyles/>
                <Header/>
                <Main>
                    <Component {...pageProps}/>
                </Main>
                <Footer/>
            </AppWrapper>
        </ThemeProvider>
    </>
}

export default MyApp
