//React
import React from "react";
//MUI components
import { Grid, Box } from "@material-ui/core";
//Card components
import CardCustom from "./CardCustom";
import Data from "./Data";

//Max width of grid item has to match max width of card
const createCards = (props) => {
	return (
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<CardCustom {...props}></CardCustom>
		</Grid>
	);
};

export default function FourthComponent() {
	return (
		<div style={{ padding: "50px 0px" }}>
			<Box mx={{ xs: 1, sm: 5, md: 20, lg: 35 }}>
				<Grid container justify="center" spacing={2}>
					{Data.map((props) => createCards(props))}
				</Grid>
			</Box>
		</div>
	);
}
