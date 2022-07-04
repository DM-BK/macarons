import { ReactNode } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export type RouteProps = {
  path: string,
  label: string,
  icon?: ReactNode,
}

type Routes = {
  HOME: RouteProps,
  POPULAR_PRODUCTS: RouteProps,
  PRODUCTS: RouteProps,
  HOW_BUY: RouteProps,
  ABOUT_US: RouteProps,
}

export const routes: Routes = {
  HOME: {
    path: '/',
    label: 'Home',
    icon: <HomeIcon />,
  },
  POPULAR_PRODUCTS: {
    path: '/popular-products',
    label: 'Popular products',
    icon: <LocalFireDepartmentIcon />,
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
  }
};