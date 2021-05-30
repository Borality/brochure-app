import React from 'react'
import { AppBar, Button, IconButton, Toolbar, makeStyles, ButtonGroup} from '@material-ui/core';

const styles = {
    appbarColor: {
        backgroundColor: "#ffffff",
    },
    buttons: {
        fontSize: "medium",
        fontWeight: "800",
    },
    customToolbar: {
        minHeight: "auto",
        height: "60px",
        backgroundColor: "#ffffff",
    }
}

export default function SecondNavbar() {
    const classes = styles;
    return (
        <div>
            <AppBar position = "sticky" >
                <Toolbar style = {classes.customToolbar}>
                    <ButtonGroup variant = "">
                        <Button style = {styles.buttons}>
                            Menu
                        </Button>
                        <Button style = {styles.buttons}>
                            Specials
                        </Button>
                        <Button style = {styles.buttons}>
                            Papa Rewards
                        </Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    )
}
