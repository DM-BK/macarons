import {useState, SyntheticEvent, useEffect} from "react";

import {Tab, Tabs} from "@common";
import {RouteProps} from "@routes";
import {useRouter} from "next/router";


interface MainMenuProps {
    routes: RouteProps[];
    sx?: any;
}

export const MainMenu = ({routes, sx}: MainMenuProps) => {
    const router = useRouter();
    const path = router.pathname.split('/')
    const [value, setValue] = useState(() => '/' + path[1]);

    useEffect(() => {
        setValue('/' + path[1])
    }, [router.pathname])

    const handleTabs = (_: SyntheticEvent, newValue: string) => {

        router.push(newValue);
    };

    return (
        <>
            <Tabs value={value} onChange={handleTabs} sx={sx}>
                {routes.map(route => (
                    <Tab key={route.path} value={route.path} label={route.label}/>
                ))}
            </Tabs>
        </>
    )
};