import React from 'react';
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import SideMenuItem from "./sideMenuItem/SideMenuItem";
import {CustomDrawer} from "./SideMenuStyles";

import CloseIcon from '@mui/icons-material/Close';

type SideMenuProps = {
    open: boolean
    handleClose: () => void
}

const labels = ['Home', 'Products', 'How buy', 'About us']

const SideMenu = ({open, handleClose}: SideMenuProps) => {
    return (
        <CustomDrawer anchor={'right'} open={open} onClose={handleClose}>
            <List>
                <ListItem onClick={handleClose} sx={{justifyContent: 'flex-end'}}>
                    <CloseIcon/>
                </ListItem>
                {labels.map(label => (
                    <SideMenuItem key={label} label={label}/>
                ))}
            </List>
        </CustomDrawer>
    );
};

export default SideMenu;