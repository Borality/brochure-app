import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import smallPizza from '../images/smallPizza.jpg'
import pizzaBox from '../images/pizzaBox.png'
import pizzaEmployees from '../images/pizzaEmployees.jpg'
import rewards from '../images/rewards.jpg'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    [theme.breakpoints.down('sm')]: {
        maxWidth: 245
      },
  },
}));

export default function FourthComponent() {
    const classes = useStyles();

    return (
        <div>
            <Box py = {7}>
                <Grid container justify="center" spacing = {2}>
                    <Grid item >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia disableTouchRipple = "true" component="img" height="140" image = {smallPizza} alt = "pizza" />
                                <CardContent>
                                <Typography gutterBottom component = "div">
                                    <Box fontWeight = "fontWeightBold" fontSize={25}>
                                        New! Epic Stuffed Crust.
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Our fresh, original crust crafted with just six simple ingredients now has a seventh: cheese. Get a 1-topping Stuffed Crust Pizza for $12.
                                </Typography>
                                </CardContent>
                                <Button variant = "outlined">Order Now</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia disableTouchRipple = "true" component="img" height="140" image = {pizzaBox} alt = "test" />
                                <CardContent>
                                <Typography gutterBottom component = "div">
                                    <Box fontWeight = "fontWeightBold" fontSize={25}>
                                        No Contact Delivery
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    No contact delivery is a request you can make that allows you to complete your order with limited personal interaction.
                                </Typography>
                                </CardContent>
                                <Button variant = "outlined">Learn More</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia disableTouchRipple = "true" component="img" height="140" image = {pizzaEmployees} alt = "test" />
                                <CardContent>
                                <Typography gutterBottom component = "div">
                                    <Box fontWeight = "fontWeightBold" fontSize={25}>
                                        Join The Team
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    You love pizza, we love pizza - it's a perfect fit.
                                </Typography>
                                </CardContent>
                                <Button variant = "outlined">Join Now</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia disableTouchRipple = "true" component="img" height="140" image = {rewards} alt = "test" />
                                <CardContent>
                                <Typography gutterBottom component = "div">
                                    <Box fontWeight = "fontWeightBold" fontSize={25}>
                                        Now More Rewarding
                                    </Box>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Rewards®️ now lets you earn more than free pizza.
                                </Typography>
                                </CardContent>
                                <Button variant = "outlined">Learn More</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
