import React from 'react';
import {ProductsSection} from '@components/global'

import {newProductsConfig} from './newProdcutsConfig'

export const NewProducts = () => {
    return (
        <ProductsSection
            title={'Top New Product'}
            description={'Tall blind but were, been folks not the expand'}
            config={newProductsConfig}
        />
    );
};