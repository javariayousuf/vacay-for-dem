import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "650px"
  },
  links: {
    color: "inherit",
    textDecoration: "none",
  },
}));

export default function CapstoneInfo() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h2>About Us</h2>
      <p>
        This project is part a University of Washington Information School{" "}
        <a href="https://ischool.uw.edu/capstone" className={classes.links}>capstone</a> and is sponsored by Common Purpose: Nxt, a local organization focused
      on reinventing the way the next generation tackles civic action.
      </p>
      <h3>Our Team</h3>
      <Grid container className={classes.gridContainer}>
      <Grid item xs={12} md={3}>
        <a href="mailto:yousujav@uw.edu?Subject=Capstone%20Work" className={classes.links}>
          Javaria Yousuf
        </a></Grid>
        <Grid item xs={12} md={3}>
        <a href="mailto:png8@uw.edu?Subject=Capstone%20Work" className={classes.links}>
          Phoebe Ng
        </a></Grid>
        <Grid item xs={12} md={3}>
        <a href="mailto:mtghuang@uw.edu?Subject=Capstone%20Work" className={classes.links}>
          Marcus Huang
        </a></Grid>
        <Grid item xs={12} md={3}>
        <a href="mailto:jdebar@uw.edu?Subject=Capstone%20Work"className={classes.links}>
          Jacques DeBar
        </a></Grid>
      </Grid>
    </Box>
  );
}
