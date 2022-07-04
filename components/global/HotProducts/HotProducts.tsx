import React from 'react';
import {ProductsSection} from '@components/global'
import {hotProducts} from "@components/global/HotProducts/hotProductsConfig";

export const HotProducts = () => {
    return (
        <ProductsSection
            title={'Top Selling Product'}
            description={'Tall blind but were, been folks not the expand'}
            config={hotProducts}
        />
    );
};