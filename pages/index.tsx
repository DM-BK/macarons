import React from 'react';
import Link from 'next/link'

const Home = () => {
    return (
        <div>
            <Link href={'/products'}>
                <a>Product</a>
            </Link>
        </div>
    );
};

export default Home
