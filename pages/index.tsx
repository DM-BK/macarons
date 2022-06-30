import type { NextPage } from 'next'
import Head from 'next/head'

import { NavigationSection } from '@components/pages/Home'
import {Box} from "@common";
import {SliderSection} from "@components/pages/Home";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Box>
            <SliderSection/>
        </Box>

      <main>
        <NavigationSection />
      </main>
    </>
  )
}

export default Home
