//React
import React from "react";
//MUI components
import {
	AppBar,
	Button,
	Toolbar,
	withStyles,
	ButtonGroup,
	Menu,
	ListItemText,
	Box,
	Typography,
	Divider,
	TextField,
	Link,
	Checkbox,
	Drawer,
	List,
	ListItem,
	makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LanguageIcon from "@material-ui/icons/Language";
//Image
import pizzaLogo from "../../images/pizzaLogo.jpg";

const useStyles = makeStyles(theme =>({
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
		[theme.breakpoints.down('sm')]: {
			height: "70px"
		  },
	},
}));
const StyledMenu = withStyles({
	paper: {
		border: "1px solid #9c0000",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));


export default function Navbar() {
	const classes = useStyles();
	{
		/*Drop Down is set by use useState, needed two handleClicks*/
	}
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [drawerOpen, setDrawerOpen] = React.useState(false);
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

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<div>
			<AppBar position="sticky" className={classes.appbarColor}>
				<Toolbar className={classes.customToolbar}>
					<Box ml={{ xs: 0, sm: 4, md: 8, lg: 11 }}>
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
								aria-controls="customized-menu"
								aria-haspopup="true"
								onClick={handleClick}
								className={classes.buttons}
							>
								En
							</Button>
						</Box>
						<Box mx={1.5} display={{ xs: "none", sm: "none", md: "block" }}>
							<Button
								endIcon={<ArrowDropDownIcon />}
								color="inherit"
								aria-controls="customized-menu"
								aria-haspopup="true"
								onClick={handleClick2}
								className={classes.buttons}
							>
								Login
							</Button>
						</Box>
						<Box mx={1.5} display={{ xs: "none", sm: "none", md: "block" }}>
							<Button color="inherit" className={classes.buttons}>
								Sign up
							</Button>
						</Box>
						<Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }}>
							<Button style={{ color: "white" }}>
								<MenuIcon
									onClick={toggleDrawer}
									style={{ fontSize: "1.5rem" }}
								/>
							</Button>
						</Box>
						{/*Bottom selects the dropdown menu depending on value of dropDown*/}
						{dropDown == 1 && (
							<StyledMenu
								id="customized-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<Box mx={4} my={2}>
									<Typography component="div">
										<Box textAlign="center">Choose Your Language</Box>
										<Box my={2}>
											<Divider />
										</Box>
									</Typography>
									<ButtonGroup variant="containted" orientation="vertical">
										<Button>English</Button>
										<Button>Español</Button>
									</ButtonGroup>
								</Box>
							</StyledMenu>
						)}
						{dropDown == 2 && (
							<StyledMenu
								id="customized-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<Box mx={4} my={2} display="flex" flexDirection="column">
									<Typography component="div">
										<Box fontSize={21} textAlign="Left" fontWeight={700}>
											{" "}
											Log In{" "}
										</Box>
										<Box my={1}>
											<Divider />
										</Box>
										<Box my={1.5}>
											<TextField
												label="Email *"
												variant="outlined"
												size="small"
											></TextField>
										</Box>
										<Box textAlign="right" fontSize={13}>
											<Link style={{ color: "#9c0000" }}>
												Forgot your password
											</Link>
										</Box>

										<Box mt={0.2}>
											<TextField
												label="Password *"
												variant="outlined"
												size="small"
											></TextField>
										</Box>
										<Box my={0.8} style={{ fontSize: "0.9rem" }}>
											<Checkbox style={{ color: "gray" }}></Checkbox>
											Keep me signed in
										</Box>
										<Box my={2}>
											<Button
												style={{
													backgroundColor: "black",
													color: "white",
													fontWeight: "700",
												}}
											>
												Log In
											</Button>
										</Box>
										<Box style={{ fontSize: "0.9rem" }}>
											Don't have an account?
											<Link style={{ color: "#9c0000" }}> Sign up</Link>
										</Box>
									</Typography>
								</Box>
							</StyledMenu>
						)}
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