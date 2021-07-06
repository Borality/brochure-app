//React
import React, { useState } from "react";
//MUI components
import {
	withStyles,
	Menu,
	Box,
	Divider,
	Button,
	Link,
	TextField,
	Checkbox,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
//Auth
import { useAuth } from "../../hooks/useAuth";
//React router components
import { useHistory } from "react-router-dom";

//Custom dropdown menu style
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

export default function LogIn(props) {
	const auth = useAuth();
	const { dropDown, anchorEl, handleClose, emailRef, passwordRef } = props;
	//Error for log in
	const [error, setError] = useState("");
	const history = useHistory();
	const {user} = useAuth();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await auth.login(emailRef.current.value, passwordRef.current.value);
			history.push("/");
			window.location.reload(false)
		} catch {
			setError("Entry not valid, try again.");
		}
	};

	const textFieldProps = {
		required: "true",
		variant: "outlined",
		size: "small",
	};

	return (
		<div>
			{/*Selects the dropdown menu depending on value of dropDown*/}
			{/*Shows EN dropdown menu*/}
			{dropDown == 1 && (
				<StyledMenu
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<Box mx={4} my={2}>
						<Box textAlign="center">Choose Your Language {user.email}</Box>
						<Box my={2}>
							<Divider />
						</Box>
						<Box display="flex" flexDirection="column">
							<Button>English</Button>
							<Button>Español</Button>
						</Box>
					</Box>
				</StyledMenu>
			)}
			{/*Shows Login dropdown menu*/}
			{dropDown == 2 && (
				<StyledMenu
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<Box mx={4} my={2} display="flex" flexDirection="column">
						<Box fontSize={21} textAlign="Left" fontWeight={700}>
							Log In
						</Box>
						<Box my={1}>
							<Divider />
						</Box>
						<form onSubmit={handleLogin}>
							<Box my={1.5}>
								<TextField
                                    {...textFieldProps}
									label="Email"
									inputRef={emailRef}
									type="email"
								></TextField>
							</Box>
							<Box textAlign="right" fontSize={13}>
								<Link style={{ color: "#9c0000" }}>Forgot your password</Link>
							</Box>

							<Box mt={0.2}>
								<TextField
                                    {...textFieldProps}
									label="Password"
									inputRef={passwordRef}
									type="password"
								></TextField>
							</Box>
							<Box my={0.8} fontSize={14}>
								<Checkbox style={{ color: "gray" }}></Checkbox>
								Keep me signed in
							</Box>
							{error && <Alert severity="error">{error}</Alert>}
							<Box my={2}>
								<Button
									style={{
										backgroundColor: "black",
										color: "white",
										fontWeight: "700",
										borderRadius: "30px",
									}}
									type="submit"
								>
									Log In
								</Button>
							</Box>
						</form>
						<Box style={{ fontSize: "0.9rem" }}>
							Don't have an account?
							<Link style={{ color: "#9c0000" }}> Sign up</Link>
						</Box>
					</Box>
				</StyledMenu>
			)}
		</div>
	);
}
