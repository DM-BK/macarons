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
        img: '/4.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    3: {
        id: 3,
        img: '/3.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    4: {
        id: 4,
        img: '/2.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: false,
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
        img: '/1.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: false,
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
        isNew: false,
        discount: 5,
    },
    10: {
        id: 10,
        img: '/car.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: false,
        discount: 5,
    },
    11: {
        id: 11,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
    12: {
        id: 12,
        img: '/1.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: false,
        discount: 5,
    },
    13: {
        id: 13,
        img: '/4.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: false,
        discount: 5,
    },
    14: {
        id: 14,
        img: '/chair.webp',
        currentPrice: 160,
        oldPrice: 260,
        label: 'Grey Sofa',
        isNew: true,
        discount: 5,
    },
}