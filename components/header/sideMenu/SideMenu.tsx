import React from 'react';
import SideMenuItem from "./sideMenuItem/SideMenuItem";
import {CloseIconStyles, DrawerStyles} from "./SideMenuStyles";

import CloseIcon from '@mui/icons-material/Close';
import {List, ListItem, Drawer} from "@common";

interface SideMenuProps {
    open: boolean
    handleClose: () => void
}

const labels = ['Home', 'Products', 'How buy', 'About us']

const SideMenu = ({open, handleClose}: SideMenuProps) => {
    return (
        <Drawer sx={DrawerStyles} anchor={'right'} open={open} onClose={handleClose}>
            <List>
                <ListItem sx={CloseIconStyles}>
                    <CloseIcon onClick={handleClose}/>
                </ListItem>
                {labels.map(label => (
                    <SideMenuItem key={label} label={label}/>
                ))}
            </List>
        </Drawer>
    );
};

export default SideMenu;