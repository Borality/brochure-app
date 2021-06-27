//React
import React from "react";
//MUI components
import { Box, Grid, Paper, makeStyles, TextField, Button} from "@material-ui/core";

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
    }
}));

const TextFieldCustom = (props) => {
	const { label } = props;
	return <TextField label={label} fullWidth variant="outlined" size="small" />;
};

export default function CreateAccount() {
	const classes = useStyles();
	return (
		<div>
			<Box my={4}>
				<Grid container justify="center">
					<Grid item xs = {1} md={2} />
					<Grid item xs = {10} md={4}>
						<Paper className={classes.paper} elevation={0}>
							<form>
								<h2>Create Your Account</h2>
								<Grid container spacing={3}>
									<Grid item xs = {12} sm = {6}>
										<TextFieldCustom label = "First Name"/>
									</Grid>
									<Grid item xs = {12} sm = {6}>
										<TextFieldCustom label = "Last Name"/>
									</Grid>
                                    <Grid item xs = {12} sm = {6}>
										<TextFieldCustom label = "Email Address"/>
									</Grid>
                                    <Grid item xs = {12} sm = {6}>
										<TextFieldCustom label = "Phone number"/>
									</Grid>
                                    <Grid item xs = {12} sm = {6}>
										<TextFieldCustom label = "Create password"/>
									</Grid>
                                    <Grid item xs = {false} sm = {6}/>
								</Grid>
                                <Box my = {2}>
                                <Button className = {classes.button} variant = "contained">
                                    Create Your Account
                                </Button>
                                </Box>
							</form>
						</Paper>
					</Grid>
					<Grid item xs = {1} md={6} />
				</Grid>
			</Box>
		</div>
	);
}
