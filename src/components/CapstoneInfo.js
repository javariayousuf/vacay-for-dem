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
        This project is part of a 
        <a href="https://ischool.uw.edu/capstone">Capstone Project course</a> at
        the University of Washington Information School.
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
