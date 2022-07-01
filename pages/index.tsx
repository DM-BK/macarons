import type {NextPage} from 'next'
import Head from 'next/head'

import {NavigationSection, ProductsSection} from '@components/pages/Home'
import {SliderSection} from "@components/pages/Home";

const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="home"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <SliderSection/>
            <NavigationSection/>
            <ProductsSection/>

        </>
    )
}

export default Home
