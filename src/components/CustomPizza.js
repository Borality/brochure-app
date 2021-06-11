import { Block } from "@material-ui/icons";
import React from "react";
import pizzaPicture from "../images/pizzaPicture.jpg";
import { Spring, animated } from "react-spring";
import {
  Box,
  Button,
  createMuiTheme,
  Grid,
  ThemeProvider,
  Slide,
} from "@material-ui/core";

const styles = {
  picture: {
    backgroundRepeat: "no-repeat",
    width: "100%",
    maxHeight: "500px",
    height: "auto",
    backgroundPosition: "0px -250px",
    objectFit: "cover",
    position: "relative",
    bottom: "80px",
    marginBottom: "-80px",
    overflow: "hidden",
  },
  text1: {
    position: "absolute",
    bottom: "80px",
    left: "80px",
    color: "white",
    backgroundColor: "black",
    fontSize: "20px",
    color: "white",
  },
  slideText: {
    one: {
      position: "absolute",
      bottom: "300px",
      left: "80px",
      color: "white",
      backgroundColor: "#9c0000",
      fontSize: "50px",
      padding: "0.2rem 0.3rem",
    },
    two: {
      position: "absolute",
      bottom: "220px",
      left: "80px",
      color: "white",
      backgroundColor: "#9c0000",
      fontSize: "50px",
      padding: "0.2rem 0.3rem",
    },
    three: {
      position: "absolute",
      bottom: "140px",
      left: "80px",
      color: "white",
      backgroundColor: "#9c0000",
      fontSize: "50px",
      padding: "0.2rem 0.3rem",
    },
  },
};

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 25,
      },
    },
  },
});

export default function CustomPizza() {
  const classes = styles;
  return (
    <div style={{ position: "relative" }}>
      <Grid container justify="center">
        <img src={pizzaPicture} style={classes.picture}></img>
        <Slide direction="right" in="true">
          <Box
            display={{ xs: "none", sm: "none", md: "block" }}
            style={classes.slideText.one}
          >
            BRAND NEW
          </Box>
        </Slide>
        <Slide direction="right" in="true">
          <Box
            display={{ xs: "none", sm: "none", md: "block" }}
            style={classes.slideText.two}
          >
            EPIC STUFFED PIZZA
          </Box>
        </Slide>
        <Slide direction="right" in="true">
          <Box
            display={{ xs: "none", sm: "none", md: "block" }}
            style={classes.slideText.three}
          >
            1-TOPPING PIZZA
          </Box>
        </Slide>
      </Grid>
      <ThemeProvider theme={theme}>
        <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <Button style={classes.text1}>
          <span>Add & customize</span>
        </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
}
