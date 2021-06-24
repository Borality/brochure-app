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

//breakpoint for media queries
const useStyles = makeStyles((theme) => ({
	appbarColor: {
		backgroundColor: "#ffffff",
	},
	button: {
		color: "white",
		backgroundColor: "black",
		borderRadius: "0px 10px 10px 0px",
		height: "40px",
		"&:hover": {
			backgroundColor: "#404040",
		},
	},
	customToolbar: {
		minHeight: "auto",
		height: "60px",
		backgroundColor: "#ffffff",
    [theme.breakpoints.down('xs')]: {
      height: "45px"
    },
	},
	tabs: {
		fontSize: "1.4rem",
		fontWeight: "700",
    color: "#080808",
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
	const classes = useStyles();
	return (
		<div>
			<AppBar position="sticky">
				<Toolbar className={classes.customToolbar}>
					<Box ml={{ xs: 0, sm: 4, md: 8, lg: 10 }} mx={{ xs: "auto" }}>
						<Tabs style={{ color: "black" }}>
							<Tab className={classes.tabs} label="Menu" />
							<Tab className={classes.tabs} label="Specials" />
							<Tab className={classes.tabs} label="Rewards" />
						</Tabs>
					</Box>
					<Box
						style={{ marginLeft: "auto" }}
						display={{ xs: "none", sm: "none", md: "block" }}
					>
						<TextField
							label="Enter promo code"
							variant="outlined"
							size="small"
						/>
					</Box>
					{/*Or use Hidden component from Material UI instead of display: none*/}
					<Box display={{ xs: "none", sm: "none", md: "block" }}>
						<Button
							variant="contained"
							className = {classes.button}
						>
							Apply
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
}
