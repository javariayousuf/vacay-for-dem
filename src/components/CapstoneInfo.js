import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 1000,
    padding: 8
    // width: "1000px"
  },
  links: {
    color: "inherit",
    textDecoration: "none",
  },
  pfp:{
    // width: "auto",
    // height: "auto",
    // maxHeight : 100,
    // maxWidth : 100,
    width: 150,
    height: 150,
    objectFit: "cover",
    borderRadius : "50%"
  },
  us:{
    width: 200,
    padding: 15
  }

}));

export default function CapstoneInfo() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
    
      
    </Box>
  );
}
























