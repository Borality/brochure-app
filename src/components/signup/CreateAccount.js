//React
import React, { useRef, useState } from "react";
//Firebase AUTH
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../hooks/useAuth";
import firebase from "../../hooks/useAuth";
//MUI components
import {
	Box,
	Grid,
	Paper,
	makeStyles,
	TextField,
	Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { useHistory } from "react-router-dom";
var uid;
const useStyles = makeStyles((theme) => ({
	paper: {
		padding: "10px",
	},
	button: {
		backgroundColor: "black",
		color: "white",
		textTransform: "none",
		borderRadius: "30px",
		fontSize: "1rem",
	},
}));

export default function CreateAccount() {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			uid = user.uid;
			// ...
		} else {
			// User is signed out
			// ...
		}
	});

	//For authentication
	const auth = useAuth();
	//Used for signing up
	const emailRef = useRef();
	const passwordRef = useRef();
	//Data for data state
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const phoneNumberRef = useRef();
	const [data, setData] = useState({
		firstNameRef: "",
		lastNameRef: "",
		phoneNumberRef: "",
	});

	const [error, setError] = useState("");
	const history = useHistory();

	const submitData = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await auth.signup(emailRef.current.value, passwordRef.current.value);
			history.push("/");
		} catch {
			{
				passwordRef.current.value.length < 6
					? setError("Password has to be greater than 6 characters")
					: setError("Enter a different password");
			}

			console.log("error");
		}

		db.collection("userData")
			.doc(uid)
			.set({
				userData: data,
			})
			.then(() => {
				console.log("Document successfully written!");
				window.location.reload(false)
			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});
	};

	const classes = useStyles();
	const textProps = {
		required: "true",
		fullWidth: "true",
		variant: "outlined",
		size: "small",
	};
	return (
		<div>
			<Box my={4}>
				<Grid container justify="center">
					<Grid item xs={1} md={2} />
					<Grid item xs={10} md={4}>
						<Paper className={classes.paper} elevation={0}>
							{error && <Alert>{error}</Alert>}
							<form onSubmit={onSubmit}>
								<h2>Create Your Account</h2>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={6}>
										<TextField
											{...textProps}
											label="First Name"
											inputRef={firstNameRef}
											name="firstNameRef"
											onChange={submitData}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											{...textProps}
											label="Last Name"
											inputRef={lastNameRef}
											name="lastNameRef"
											onChange={submitData}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											{...textProps}
											label="Enter email"
											inputRef={emailRef}
											type="email"
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											{...textProps}
											label="Phone number"
											inputRef={phoneNumberRef}
											name="phoneNumberRef"
											onChange={submitData}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											{...textProps}
											label="Enter password"
											inputRef={passwordRef}
											type="password"
										/>
									</Grid>
									<Grid item xs={false} sm={6} />
								</Grid>
								<Box my={2}>
									<Button
										type="submit"
										className={classes.button}
										variant="contained"
									>
										Create Your Account
									</Button>
								</Box>
							</form>
						</Paper>
					</Grid>
					<Grid item xs={1} md={6} />
				</Grid>
			</Box>
		</div>
	);
}
