//React
import React from "react";
//MUI components
import {
	Box,
	Button,
	createMuiTheme,
	Grid,
	ThemeProvider,
	Slide,
} from "@material-ui/core";
//Image
import pizzaPicture from "../images/pizzaPicture.jpg";

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
	button: {
		position: "absolute",
		bottom: "75px",
		left: "80px",
		color: "white",
		backgroundColor: "black",
		fontSize: "20px",
		padding: "10px 10px"
	},
	slideText: {
		one: {
			position: "absolute",
			bottom: "300px",
			left: "80px",
			color: "white",
			backgroundColor: "#9c0000",
			fontSize: "50px",
			padding: "0.2rem 0.4rem",
		},
		two: {
			position: "absolute",
			bottom: "220px",
			left: "80px",
			color: "white",
			backgroundColor: "#9c0000",
			fontSize: "50px",
			padding: "0.2rem 0.4rem",
		},
		three: {
			position: "absolute",
			bottom: "140px",
			left: "80px",
			color: "white",
			backgroundColor: "#9c0000",
			fontSize: "50px",
			padding: "0.2rem 0.4rem",
		},
	},
};

const SlidingText = (props) => {
	const { text, style } = props;
	return (
		<Slide direction="right" in="true">
			<Box display={{ xs: "none", sm: "none", md: "block" }} style={style}>
				{text}
			</Box>
		</Slide>
	);
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
				<img src={pizzaPicture} style={classes.picture} alt = "pizza"></img>
				<SlidingText
					text={"BRAND NEW"}
					style={classes.slideText.one}
				></SlidingText>
				<SlidingText
					text={"EPIC STUFFED PIZZA"}
					style={classes.slideText.two}
				></SlidingText>
				<SlidingText
					text={"1-TOPPING PIZZA"}
					style={classes.slideText.three}
				></SlidingText>
			</Grid>
			<ThemeProvider theme={theme}>
				<Box display={{ xs: "none", sm: "none", md: "block" }}>
					<Button style={classes.button}>
						<span>Add & customize</span>
					</Button>
				</Box>
			</ThemeProvider>
		</div>
	);
}
