import { ReactNode } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

type Page = {
  path: string,
  label: string,
  icon?: ReactNode,
}

type Routes = {
  HOME: Page,
  HOT: Page,
  PRODUCTS: Page,
  HOW_BUY: Page,
  ABOUT_US: Page,
}

export const routes: Routes = {
  HOME: {
    path: '/',
    label: 'Home',
    icon: <HomeIcon />,
  },
  HOT: {
    path: '/hot',
    label: 'Hot',
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