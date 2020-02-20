import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "600px"
  }
}));

export default function CapstoneInfo() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h2>About this project</h2>
      <p>
        This project is part of a
        <a href="https://ischool.uw.edu/capstone">Capstone Project course</a> at
        the University of Washington Information School.
      </p>
      <h3>Developers:</h3>
      <ul>
        <a href="mailto:yousujav@uw.edu?Subject=Capstone%20Work">
          <li>Javaria Yousuf</li>
        </a>
        <a href="mailto:png8@uw.edu?Subject=Capstone%20Work">
          <li>Phoebe Ng</li>
        </a>
        <a href="mailto:mtghuang@uw.edu?Subject=Capstone%20Work">
          <li>Marcus Huang</li>
        </a>
        <a href="mailto:jdebar@uw.edu?Subject=Capstone%20Work">
          <li>Jacques DeBar</li>
        </a>
      </ul>
      This project is sponsored by CP Nxt, a local Seattle organization focused
      on reinventing the way communities form around volunteering and voting.
    </Box>
  );
}
