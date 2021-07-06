//React
import React, { useState, useEffect, useRef } from "react";
import { Link as Link2, useHistory } from "react-router-dom";
//MUI components
import {
	AppBar,
	Button,
	Toolbar,
	ListItemText,
	Box,
	Divider,
	TextField,
	Drawer,
	List,
	ListItem,
	makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LanguageIcon from "@material-ui/icons/Language";
//Image
import pizzaLogo from "../images/pizzaLogo.jpg";
//Firebase
import firebase from "../hooks/useAuth";
import { db } from "../hooks/useAuth";
import { useAuth } from "../hooks/useAuth";
//For dropdown menu
import LogIn from "./login/LogIn";

var uid;
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		if (user != null) {
			uid = user.uid;
		}
	} else {
		// User is signed out
	}
});

const useStyles = makeStyles((theme) => ({
	toolbarButtons: {
		marginLeft: "auto",
	},
	appbarColor: {
		backgroundColor: "#9c0000",
	},
	buttons: {
		fontSize: "0.9rem",
		fontWeight: "600",
		borderRadius: "6%",
		"&:hover": {
			backgroundColor: "#690000 ",
		},
	},
	logo: {
		maxWidth: 60,
	},
	customToolbar: {
		minHeight: "auto",
		height: "80px",
		[theme.breakpoints.down("sm")]: {
			height: "70px",
		},
	},
}));


export default function Navbar() {
	const classes = useStyles();
	//Drop Down is set by use useState, needed two handleClicks
	const [anchorEl, setAnchorEl] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	let [dropDown, setDropDown] = useState(0);
	//Setting user data
	const [user, setUser] = useState([]);
	const auth = useAuth();
	const emailRef = useRef();
	const passwordRef = useRef();

	var docRef = db.collection("userData").doc(uid);

	//Setting user information into user array
	const getData = () => {
		docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					console.log("Document data:", doc.data().userData);
					setUser(doc.data().userData);
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	//Mostly used for handling the dropdown menu
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

	//For drawer in small screen
	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	//For log out
	const logOut = async (e) => {
		auth.logout();
		window.location.reload(false);
	};

	return (
		<div>
			<AppBar position="sticky" className={classes.appbarColor}>
				<Toolbar className={classes.customToolbar}>
					<Box component={Link2} to="/" ml={{ xs: 0, sm: 4, md: 8, lg: 11 }}>
						<img src={pizzaLogo} alt="logo" className={classes.logo} />
					</Box>
					<Box marginLeft="auto" mr={0.5} display="flex" flexDirection="row">
						<Box mx={1.5}>
							<Button color="inherit" className={classes.buttons}>
								Start your order
							</Button>
						</Box>
						<Box mx={1.5} display={{ xs: "none", sm: "none", md: "block" }}>
							<Button
								startIcon={<LanguageIcon />}
								endIcon={<ArrowDropDownIcon />}
								color="inherit"
								onClick={handleClick}
								className={classes.buttons}
							>
								En
							</Button>
						</Box>
						{!uid && (
							<Box mx={1.5} display={{ xs: "none", sm: "none", md: "block" }}>
								<Button
									endIcon={<ArrowDropDownIcon />}
									color="inherit"
									onClick={handleClick2}
									className={classes.buttons}
								>
									Login
								</Button>
							</Box>
						)}
						{!uid && (
							<Box mx={1.5} display={{ xs: "none", sm: "none", md: "block" }}>
								{/*If user logged in then Sign Up button does not appear*/}
								<Button
									component={Link2}
									to="/SignUp"
									color="inherit"
									className={classes.buttons}
								>
									Sign up
								</Button>
							</Box>
						)}
						{uid && (
							<Box mx={1.5} display={{ xs: "none", sm: "none", md: "block" }}>
								{/*Or if user logged in show user name*/}
								<Button color="inherit" className={classes.buttons}>
									Hi, {user.firstNameRef}
								</Button>
							</Box>
						)}
						{uid && (
							<Box mx={1.5} display={{ xs: "none", sm: "none", md: "block" }}>
								{/*If user logged in then show logOut button*/}
								<Button
									color="inherit"
									className={classes.buttons}
									onClick={logOut}
								>
									Logout
								</Button>
							</Box>
						)}
						{/*Sandwich menu only shows when screen is small*/}
						<Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }}>
							<Button style={{ color: "white" }}>
								<MenuIcon
									onClick={toggleDrawer}
									style={{ fontSize: "1.5rem" }}
								/>
							</Button>
						</Box>
						<LogIn
							dropDown={dropDown}
							anchorEl={anchorEl}
							handleClose={handleClose}
							emailRef = {emailRef}
							passwordRef = {passwordRef}
						/>
					</Box>
				</Toolbar>
				<Drawer
					anchor="right"
					variant="temporary"
					onClose={toggleDrawer}
					open={drawerOpen}
				>
					<List style={{ maxWidth: "300px" }}>
						<ListItem button onClick={toggleDrawer}>
							<ListItemText>
								<Box mb={2}>
									<Button
										style={{ backgroundColor: "#9c0000", color: "white" }}
										variant="contained"
										onClick={toggleDrawer}
										component={Link2}
										to="/SignUp"
									>
										Sign Up
									</Button>
								</Box>
								<Divider></Divider>
							</ListItemText>
						</ListItem>
						{["My Rewards", "My Favorites", "Profile"].map((text) => (
							<ListItem button onClick={toggleDrawer}>
								<ListItemText>
									<Box mb={2}>
										<Button onClick={toggleDrawer}>{text}</Button>
									</Box>
									<Divider></Divider>
								</ListItemText>
							</ListItem>
						))}
						<ListItem>
							<ListItemText>
								<Box mb={2}>
									<Button endIcon={<ArrowDropDownIcon />}>English</Button>
								</Box>
								<Divider></Divider>
							</ListItemText>
						</ListItem>
						<ListItem onclick={toggleDrawer}>
							<ListItemText>
								<Box mb={2}>
									<Button>Apply Promo Code</Button>
									<TextField variant="outlined" size="small"></TextField>
								</Box>
								<Divider></Divider>
							</ListItemText>
						</ListItem>
					</List>
				</Drawer>
			</AppBar>
		</div>
	);
}
