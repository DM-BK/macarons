import Head from 'next/head'

import {NavigationSection} from '@components/pages/Home'
import {SliderSection} from "@components/pages/Home";
import {TopSaleProducts} from "@components/pages/Home";
import {AllProducts} from "@components/global/AllProducts";
import {HotProducts} from "@components/global/HotProducts/HotProducts";
import {NewProducts} from "@components/global/NewProducts/NewProducts";
import {Box} from "@common";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="home"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <SliderSection/>

            <Box sx={{mt: 3, mb: 3}}>
                <TopSaleProducts />
                <NewProducts />
                <HotProducts />
                <AllProducts />
            </Box>

            <NavigationSection/>

        </>
    )
}

export default Home