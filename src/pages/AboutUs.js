import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#F9F8F8"
    }
}));

export default function AboutUs() {
    const classes = useStyles();
    return (<div className={classes.root}>
        
    </div>);
}