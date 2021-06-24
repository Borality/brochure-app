//React
import React from "react";
//MUI components
import {Card, CardActionArea, CardMedia, CardContent, Typography, Box, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//MUI styles
const useStyles = makeStyles((theme) => ({
    root: {
       
      [theme.breakpoints.down("sm")]: {
        minWidth: 245,
      },
    },
  }));


const CardCustom = (props) => {
	const { title, description, picture, button } = props;
    const classes = useStyles();
	return (
		<Card className={classes.root} elevation = {0}>
			<CardActionArea disableTouchRipple>
				<CardMedia component="img" height="140" image={picture} alt="pizza" />
				<CardContent>
					<Typography gutterBottom component="div">
						<Box fontWeight="fontWeightBold" fontSize={25}>
							{title}
						</Box>
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
				<Box ml={1.7} mb={1}>
					<Button variant="outlined">{button}</Button>
				</Box>
			</CardActionArea>
		</Card>
	);
};

export default CardCustom;