import Head from 'next/head'

import {SliderSection} from "@components/pages/Home";
import {CategorySection} from "@components/pages/Home";
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
                <CategorySection />
                <NewProducts />
                <HotProducts />
                <AllProducts />
            </Box>
        </>
    )
}

export default Home