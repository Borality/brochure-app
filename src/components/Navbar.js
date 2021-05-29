import React from 'react'
import { AppBar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar() {
    return (
        <div>
            <AppBar>
                <IconButton edge = "start">
                    <MenuIcon></MenuIcon>
                </IconButton>
            </AppBar>
        </div>
    )
}
