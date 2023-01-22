import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BottomNavigation, BottomNavigationAction, Box, Drawer } from "@common";
import { NavigationByCategories } from "@components/global/NavigationByCategories";

import { navigationRoutes } from "./navigationRoutes";

import * as styles from './MobileNavigationStyles';

export const MobileNavigation = () => {
  const router = useRouter()
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(router.pathname)
  }, [router.pathname]);

  const handleSwitchIsOpen = () => setIsOpenDrawer((prevState) => !prevState);

  const handleBottomNavigation = (_: any, newPathname: string) => {
    setPathname(newPathname);

    if (newPathname === 'category') return handleSwitchIsOpen();

    setIsOpenDrawer(false);
    router.push(newPathname);
  };

  return (
    <Box sx={styles.Container}>
      <BottomNavigation
        showLabels
        value={pathname}
        onChange={handleBottomNavigation}
        sx={styles.Navigation}
      >
        {navigationRoutes.map((route) => (
          <BottomNavigationAction
            key={route.label}
            label={route.label}
            icon={route.icon}
            value={route.path}
          />
        ))}
      </BottomNavigation>

      <Drawer anchor={'left'} open={isOpenDrawer} onClose={handleSwitchIsOpen} >
          <NavigationByCategories />
        </Drawer>
    </Box>
  );
};