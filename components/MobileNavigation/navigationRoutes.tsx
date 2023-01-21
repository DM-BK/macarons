import { routes } from "@routes";

import CategoryIcon from '@mui/icons-material/Dashboard';

export const navigationRoutes = [
  routes.HOME,
  {label: 'Category', path: 'category', icon: <CategoryIcon />}, 
  routes.POPULAR_PRODUCTS,
];