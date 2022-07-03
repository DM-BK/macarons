export type ProductType = {
    img: string
    discount: number
    isNew: boolean
    label: string
    currentPrice: number
    oldPrice: number
    id: number
}

type ProductsType = {
    [key: number]: ProductType
}

export const allProducts: ProductsType = {
    1: {
        id: 1,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    2: {
        id: 2,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    3: {
        id: 3,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    4: {
        id: 4,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    5: {
        id: 5,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    6: {
        id: 6,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    7: {
        id: 7,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    8: {
        id: 8,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    9: {
        id: 9,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    }
}