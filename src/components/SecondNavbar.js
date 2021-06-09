import React from 'react'
import { AppBar, Button, withStyles, Toolbar, styled, ButtonGroup, TextField, Box} from '@material-ui/core';
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
    },
    textField: {
        [`& fieldset`]: {
          borderRadius: 10,
        },
        
    
    }
}

const SearchBox = styled(TextField)(() => ({
    '& fieldset': {
      borderRadius: '50px',
    },
  }));

const blackTheme = createMuiTheme({ palette: { primary: { main: "#000000"} } })


export default function SecondNavbar() {
    const classes = styles;
    const classes2 = SearchBox;
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
                            Rewards
                        </Button>
                    </ButtonGroup>
                    <Box style = {{marginLeft: "auto"}} display={{ xs: "none", sm: "none", md: "block" }}>
                        <TextField label="Enter promo code" variant="outlined" size="small"/>
                    </Box>
                    <MuiThemeProvider>
                        <Box display={{ xs: "none", sm: "none", md: "block" }}>
                        <Button variant="contained" style = {{color : "white", backgroundColor : "black", borderRadius: "0px 10px 10px 0px", height: "40px"}}>Apply</Button>
                        </Box>
                    </MuiThemeProvider>
                </Toolbar>
            </AppBar>
        </div>
    )
}
