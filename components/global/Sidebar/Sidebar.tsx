import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BottomNavigation, BottomNavigationAction, Drawer, Link, List, ListItem, ListSubheader } from "@common";

import { mobileBottomNavigationRoutes, sidebarPopularProductsRoutes } from "./routes";

export const Sidebar = () => {
  const router = useRouter()
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setValue(router.pathname)
  }, [router.pathname]);

  const handleSwitchIsOpen = () => setIsOpen((prevState) => !prevState);

  const handleBottomNavigation = (_: any, newValue: string) => {
    setValue(newValue);

    if (newValue === 'category') return handleSwitchIsOpen();

    setIsOpen(false);
    router.push(newValue)
  };

  return (<>
    {isOpen && (
      <Drawer anchor={'left'} open={isOpen} onClose={() => setIsOpen(false)}>
        <List
          subheader={<ListSubheader>Popular Products</ListSubheader>}
        >
          {sidebarPopularProductsRoutes.map((route) => (
            <ListItem>
              <Link href={route.path}>{route.label}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )}
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleBottomNavigation}
    >
      {mobileBottomNavigationRoutes.map((route) => (
        <BottomNavigationAction
          key={route.label}
          label={route.label}
          icon={route.icon}
          value={route.path}
        />
      ))}
    </BottomNavigation>
  </>);
};