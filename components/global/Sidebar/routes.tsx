import { routes } from "@routes";

import CategoryIcon from '@mui/icons-material/Dashboard';

export const sidebarPopularProductsRoutes = [
  routes.HOT,
];

export const mobileBottomNavigationRoutes = [
  routes.HOME,
  {label: 'Category', path: 'category', icon: <CategoryIcon />}, 
  routes.HOT,
];