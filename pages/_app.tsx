import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {ThemeProvider} from '@mui/material/styles'
import {Toaster} from 'react-hot-toast'

import {Box} from "@common";
import {Footer} from "@components/Footer";
import {Header} from "@components/Header";
import GlobalStyles, {AppBoxStyles, Main, theme} from "../components/global/GlobalStyles";
import {store} from "../store/store";

import "@fontsource/nunito"

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
                    <Footer/>
                </Box>
                <Toaster
                    gutter={4}
                    position="bottom-right"
                    toastOptions={{className: 'toast'}}
                />
            </ThemeProvider>
        </Provider>
    </>
}

export default MyApp
