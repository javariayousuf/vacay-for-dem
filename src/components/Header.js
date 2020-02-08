import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#dddddd",
    height: "80px",
    borderBottom: "2px solid #00B0F0"
  },
  logo: {
    height: "50px"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img
        className={classes.logo}
        src="https://images.squarespace-cdn.com/content/5c464da03917ee46230d8232/1563495118773-4QCOOM46M387IUO76BJK/VforD.jpg?content-type=image%2Fjpeg"
        alt="vacay logo"
      />
    </Box>
  );
}
