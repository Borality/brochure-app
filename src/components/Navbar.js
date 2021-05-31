import React from 'react'
import { AppBar, Button, Toolbar, withStyles, ButtonGroup, Menu, MenuItem, ListItemText, Box, Typography, Divider,} from '@material-ui/core';
import pizzaLogo from '../images/pizzaLogo.jpg'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LanguageIcon from '@material-ui/icons/Language';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

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

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #9c0000',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: "#9c0000",
      },
    },
  },
}))(MenuItem);

export default function Navbar() {
    const classes = styles;
    const [anchorEl, setAnchorEl] = React.useState(null);
    {/*Drop Down is set by use useState, needed two handleClicks*/}
    let [dropDown, setDropDown] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setDropDown(1);
    };

    const handleClick2 = (event) => {
        setAnchorEl(event.currentTarget);
        setDropDown(2);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position = "sticky" style={classes.appbarColor}>
                <Toolbar style = {classes.customToolbar}>
                    <img src = {pizzaLogo} alt="logo" style = {classes.logo}/>
                    <ButtonGroup style = {classes.toolbarButtons} variant = "">

                        <Button color = "inherit" style = {styles.buttons}>
                            Start your order
                        </Button>
                        
                        <Button 
                            startIcon = {<LanguageIcon/>} 
                            endIcon = {<ArrowDropDownIcon/>}
                            color = "inherit" 
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            style = {styles.buttons}
                        >
                            En
                        </Button>

                        <Button 
                            endIcon = {<ArrowDropDownIcon/>} 
                            color = "inherit" 
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            onClick={handleClick2}
                            style = {styles.buttons}
                        >
                            Login
                        </Button>

                        <Button color = "inherit" style = {styles.buttons}>
                            Sign up
                        </Button>
                        
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                        >
                            Open Menu
                        </Button>
                        {/*Bottom selects the dropdown menu depending on value of dropDown*/}
                        {dropDown == 1 
                        ?
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Box mx = {4} my = {2}>
                                <Typography component = "div">
                                    <Box textAlign="center">
                                        Choose Your Language
                                    </Box>
                                    <Box my = {2}>
                                        <Divider/>
                                    </Box>
                                </Typography>
                                <ButtonGroup variant = "containted" orientation = "vertical">
                                    <Button>
                                        English
                                    </Button>
                                    <Button>
                                        Español
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </StyledMenu>
                        :
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Box mx = {4} my = {2}>
                                <Typography component = "div">
                                    <Box textAlign="center">
                                        Testestest {dropDown}
                                    </Box>
                                    <Box my = {2}>
                                        <Divider/>
                                    </Box>
                                </Typography>
                            </Box>
                        </StyledMenu>
                        }           
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    )
}
