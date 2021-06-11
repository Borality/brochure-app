import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";

export default function FifthComponent() {
  return (
    <div style={{ backgroundColor: "#ededed" }}>
      {/* Bottom adjust top margin space of box*/}
      <Grid container justify="center">
        <Box my={4} textAlign="center">
          {/* Bottom adjust top margin space of text*/}
          <Box fontSize={30} fontWeight={800}>
            Download Our App
          </Box>
          <Box my={3}>
            <Typography variant="body2" color="textSecondary" component="p">
              Get our best offers with the mobile app.
            </Typography>
          </Box>
          {/* Spacing spaces out grid item in x or y dimension*/}
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button startIcon={<AppleIcon />} variant="contained">
                Apple Store
              </Button>
            </Grid>
            <Grid item>
              <Button startIcon={<AndroidIcon />} variant="contained">
                Google Play
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
