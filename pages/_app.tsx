import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import { Toaster } from 'react-hot-toast'

import { Box } from '@common'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { MobileNavigation } from '@components/MobileNavigation'

import GlobalStyles, {
  AppBoxStyles,
  Main,
  theme,
} from '../components/global/GlobalStyles'

import { store } from '../store/store'

import '@fontsource/nunito'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const showTemplate = !router.pathname.includes('products2')

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Box sx={AppBoxStyles}>
            <GlobalStyles />

            {showTemplate ? (
              <>
                <Header />
                <Main>
                  <Component {...pageProps} />
                </Main>
                <MobileNavigation />
                <Footer />
              </>
            ) : (
              <Component {...pageProps} />
            )}
          </Box>
          <Toaster
            gutter={4}
            position='bottom-right'
            toastOptions={{ className: 'toast' }}
          />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
