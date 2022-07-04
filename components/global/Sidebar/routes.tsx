import { routes } from "@routes";

import CategoryIcon from '@mui/icons-material/Dashboard';

export const sidebarPopularProductsRoutes = [
  routes.POPULAR_PRODUCTS,
];

export const mobileBottomNavigationRoutes = [
  routes.HOME,
  {label: 'Category', path: 'category', icon: <CategoryIcon />}, 
  routes.POPULAR_PRODUCTS,
];