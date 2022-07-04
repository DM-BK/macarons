import { Tab, Tabs } from "@common";
import { RouteProps } from "@routes";
import { useRouter } from "next/router";
import { useState, SyntheticEvent, useEffect } from "react";

interface MainMenuProps {
  routes: RouteProps[];
  sx?: any;
}

export const MainMenu = ({routes, sx}: MainMenuProps) => {
  const router = useRouter();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(router.pathname)
  }, [router.pathname])

  const handleTabs = (_: SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };

  return (
    <Tabs value={value} onChange={handleTabs} sx={sx}>
        {routes.map(route => (
            <Tab key={route.path} value={route.path} label={route.label} />
        ))}
    </Tabs>
  )
};