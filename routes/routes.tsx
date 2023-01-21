import { ReactNode } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { CakeIcon, CakesByDesignIcon, CupcakeIcon, MacaronsIcon, PiesIcon } from './icons';

export type RouteProps = {
  path: string,
  label: string,
  icon?: ReactNode,
}

export const routes: {[key: string]: RouteProps} = {
  HOME: {
    path: '/',
    label: 'Home',
    icon: <HomeIcon />,
  },
  PRODUCTS: {
    path: '/products',
    label: 'Products',
  },
  HOW_BUY: {
    path: '/how-buy',
    label: 'How buy',
  },
  ABOUT_US: {
    path: '/about-us',
    label: 'About us',
  },

  // Categories
  POPULAR_PRODUCTS: {
    path: '/popular-products',
    label: 'Hot products',
    icon: <LocalFireDepartmentIcon />,
  },
  CAKES: {
    path: '/cakes',
    label: 'Cakes',
    icon: <CakeIcon />,
  },
  CUPCAKES: {
    path: '/cupcakes',
    label: 'Cupcakes',
    icon: <CupcakeIcon />,
  },
  MACARONS: {
    path: '/Macarons',
    label: 'Macarons',
    icon: <MacaronsIcon />,
  },
  PIES: {
    path: '/pies',
    label: 'Pies',
    icon: <PiesIcon />,
  },
  CAKES_BY_DESIGN: {
    path: '/cakes-by-design',
    label: 'Cakes by Design',
    icon: <CakesByDesignIcon />,
  },
};