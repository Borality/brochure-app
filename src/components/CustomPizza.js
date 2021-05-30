import { Block } from '@material-ui/icons';
import React from 'react'
import pizzaPicture from '../images/pizzaPicture.jpg'
import {Spring, animated} from 'react-spring'
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core';

const styles = {
    picture: {
        backgroundRepeat: "no-repeat",
        width:"100%", 
        maxHeight: "500px",
        height: "auto",
        backgroundPosition: "0px -250px",
        objectFit: "cover",
        position: "relative",
        bottom: "80px",
        marginBottom: "-80px",
        overflow: "hidden"
    },
    text1: {
        position: "absolute",
        bottom: "80px",
        left: "80px",
        color: "white",
        backgroundColor: "black",
        fontSize: "20px",
        color: "white",
    }
}

const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 25,
        }, 
      }, 
    }, 
  }) 


export default function CustomPizza() {
    const classes = styles;
    return (
        <div style = {{position: "relative"}}>
            <img src = {pizzaPicture} style = {classes.picture}></img>
            {/* 
            <div style = {classes.text1}>
                <span>NEW</span>
            </div>
            */}
            <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0, 
                position: "absolute",
                bottom: "300px",
                left: "80px",
                color: "white",
                backgroundColor: "#fb4646",
                fontSize: "50px",
                clipPath: "polygon(0 10%, 100% 3%, 100% 90%, 0% 100%)", }}
            >
            {styles => (
            <animated.div style={styles}>
                <div>BRAND NEW</div>
            </animated.div>
            )}
            </Spring>   

            <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0, 
                position: "absolute",
                bottom: "230px",
                left: "80px",
                color: "white",
                backgroundColor: "#fb4646",
                fontSize: "50px",
                clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)", }}
            >
            {styles => (
            <animated.div style={styles}>
                <div>EPIC STUFFED PIZZA</div>
            </animated.div>
            )}
            </Spring>  

            <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0, 
                position: "absolute",
                bottom: "160px",
                left: "80px",
                color: "white",
                backgroundColor: "#fb4646",
                fontSize: "50px",
                clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)", }}
            >
            {styles => (
            <animated.div style={styles}>
                <div>1-TOPPING PIZZA</div>
            </animated.div>
            )}
            </Spring>  
            <ThemeProvider theme = {theme}>
                <Button style = {classes.text1}>
                    <span>Add & customize</span>
                </Button>
            </ThemeProvider>
        </div>
    )
}
