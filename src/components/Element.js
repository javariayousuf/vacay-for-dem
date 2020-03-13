import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#dddddd",
    height: "250px",
    width: "400px",
    border: "3px solid ##333"
    // backgroundColor: "#eee"
  }
}));

export default function Element() {
  const classes = useStyles();

  return <Box className={classes.root}>testing</Box>;
}
