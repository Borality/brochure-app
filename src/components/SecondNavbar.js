import React from 'react'
import { AppBar, Button, withStyles, Toolbar, makeStyles, ButtonGroup, TextField, Box} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'


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
const blackTheme = createMuiTheme({ palette: { primary: { main: "#000000"} } })


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
                    <Box pl = {25}>
                        <TextField label="Enter promo code" variant="outlined" size="small"/>
                    </Box>
                    <MuiThemeProvider>
                        <Button variant="contained" style = {{color : "white", backgroundColor : "black", borderRadius: "0px 50px 50px 0px", height: "40px"}}>Apply</Button>
                    </MuiThemeProvider>
                </Toolbar>
            </AppBar>
        </div>
    )
}
