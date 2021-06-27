//React
import React from "react";
//Components
import CreateAccount from "./CreateAccount";
import Navbar from "../homepage/Navbar";
import SecondNavbar from "../homepage/SecondNavbar";

export default function SignUp() {
	return (
		<div>
			<Navbar />
			<SecondNavbar />
			<CreateAccount />
		</div>
	);
}
