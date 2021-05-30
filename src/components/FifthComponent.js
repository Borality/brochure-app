import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

export default function FifthComponent() {
    return (
        <div style = {{backgroundColor: "#ededed"}}>
            <br></br>
            {/* Bottom adjust top margin space of box*/}
            <Box mt = {4} textAlign="center">
                <Typography component = "div">
                    {/* Bottom adjust top margin space of text*/}
                    <Box mb = {2} fontSize={30} fontWeight={800}> 
                    Download Our App
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Get our best offers with the mobile app.
                    </Typography>
                </Typography>
                {/* Bottom centers space of buttons*/}
                <Grid container justify="center">
                    {/* Bottom changes space between Apple/Android buttons*/}
                    <Box mx = {2} my = {2} mb = {7}>
                        <Button startIcon = {<AppleIcon/>} variant="contained">
                            Apple Store
                        </Button>
                    </Box>
                    {/* Bottom changes space between Apple/Android buttons*/}
                    <Box mx = {2} my = {2} mb = {7}>
                        <Button startIcon = {<AndroidIcon/>} variant="contained">
                            Google Play
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </div>
    )
}
