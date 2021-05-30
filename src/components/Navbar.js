import React from 'react'
import { AppBar, Button, IconButton, Toolbar, makeStyles, ButtonGroup} from '@material-ui/core';
import pizzaLogo from '../images/pizzaLogo.jpg'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LanguageIcon from '@material-ui/icons/Language';

const styles = {
    toolbarButtons: {
        marginLeft: "auto",
    },
    appbarColor: {
        backgroundColor: "#9c0000",
    },
    buttons: {
        fontSize: "medium",
        fontWeight: "600",
    },
    logo: {
        maxWidth: 60,
    },
    customToolbar: {
        minHeight: "auto",
        height: "80px",
    }
}

export default function Navbar() {
    const classes = styles;
    return (
        <div>
            <AppBar position = "sticky" style={classes.appbarColor}>
                <Toolbar style = {classes.customToolbar}>
                    <img src = {pizzaLogo} alt="logo" style = {classes.logo}/>
                    <ButtonGroup style = {classes.toolbarButtons} variant = "">
                        <Button color = "inherit" style = {styles.buttons}>
                            Start your order
                        </Button>
                        <Button startIcon = {<LanguageIcon/>} color = "inherit" style = {styles.buttons}>
                            En
                        </Button>
                        <Button endIcon = {<ArrowDropDownIcon/>} color = "inherit" style = {styles.buttons}>
                            Login
                        </Button>
                        <Button color = "inherit" style = {styles.buttons}>
                            Sign up
                        </Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    )
}
