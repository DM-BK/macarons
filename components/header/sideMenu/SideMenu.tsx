import React from 'react';
import {List} from "@mui/material";
import SideMenuItem from "./sideMenuItem/SideMenuItem";
import {CustomDrawer} from "./SideMenuStyles";


type SideMenuProps = {
    open: boolean
    handleClose: () => void
}

const labels = ['Home', 'Products', 'How buy', 'About us']

const SideMenu = ({open, handleClose}: SideMenuProps) => {
    return (
        <CustomDrawer anchor={'right'} open={open} onClose={handleClose}>
            <List>
                {labels.map(label => (
                    <SideMenuItem key={label} label={label}/>
                ))}
            </List>
        </CustomDrawer>
    );
};

export default SideMenu;