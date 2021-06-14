import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Tab,
  TextField,
  Box,
  Tabs,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  appbarColor: {
    backgroundColor: "#ffffff",
  },
  buttons: {
    fontSize: "1.4rem",
    fontWeight: "700",
    borderBottom: "4px solid orange",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },
  customToolbar: {
    minHeight: "auto",
    height: "60px",
    backgroundColor: "#ffffff",
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 0,
    },
  },
};
//breakpoint for media queries 
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1.4rem",
    fontWeight: "700",
    minWidth: 72,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
    "&:hover": {
      borderBottom: "4px solid #9c0000",
    },
  },
}));

export default function SecondNavbar() {
  const classes = styles;
  const classes2 = useStyles();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar style={classes.customToolbar}>
          <Box ml = {{xs: 0, sm: 4, md: 8, lg: 10}} mx = {{xs: "auto"}}>
            <Tabs style={{ color: "black" }}>
              <Tab className={classes2.root} label="Menu" />
              <Tab className={classes2.root} label="Specials" />
              <Tab className={classes2.root} label="Rewards" />
            </Tabs>
          </Box>
          <Box
            style={{ marginLeft: "auto" }}
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            <TextField
              styled={classes.textField}
              label="Enter promo code"
              variant="outlined"
              size="small"
            />
          </Box>
          {/*Or use Hidden component from Material UI instead of display: none*/}
          <Box display={{ xs: "none", sm: "none", md: "block" }}>
            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "black",
                borderRadius: "0px 10px 10px 0px",
                height: "40px",
              }}
            >
              Apply
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
