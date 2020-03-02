import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F9F8F8",
    minHeight: "74vh"
  },
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
    </div>
  );
}
