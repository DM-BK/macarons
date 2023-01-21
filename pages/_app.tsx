import '../styles/globals.css'

import {Provider} from 'react-redux'
import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles'

import {Box} from "@common";
import {Footer} from "@components/Footer";
import {Header} from "@components/Header";
import {MobileNavigation} from '@components/MobileNavigation';

import GlobalStyles, {AppBoxStyles, Main, theme} from "../components/global/GlobalStyles";

import {store} from "../store/store";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Box sx={AppBoxStyles}>
                    <GlobalStyles/>
                    <Header />
                    <Main>
                        <Component {...pageProps}/>
                    </Main>
                    <MobileNavigation />
                    <Footer/>
                </Box>
            </ThemeProvider>
        </Provider>
    </>
}

export default MyApp
