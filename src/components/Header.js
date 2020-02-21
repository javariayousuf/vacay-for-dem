import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    height: "80px",
    width: '100%',
    position: 'fixed',
  },
  logo: {
    height: "55px",
    margin: "20px",
    marginRight: "50px"
  }, 
  linkBox: {
    padding: "15px",
    paddingTop: "31px",
    paddingBottom: "31px",
    '&:hover': {
      backgroundColor: "#eee"
    },
    color: "inherit",
    height: "80px"
  },
  signUpButton: {
    justifyContent: "right",
    margin: "10px",
    backgroundColor: "#014378",
    fontWeight: 'bold',
    color: "#FFFFFF",
    '&:hover': {
      color: "#014378",
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Box
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      }}
      >
      <a href="/">
        <img
          className={classes.logo}
          src="https://images.squarespace-cdn.com/content/5c464da03917ee46230d8232/1563495118773-4QCOOM46M387IUO76BJK/VforD.jpg?content-type=image%2Fjpeg"
          alt="vacay logo"
        />
      </a>

        <Typography>
          <Link href="/" className={classes.linkBox}>About Us</Link>
          <Link href="/" className={classes.linkBox}>Destinations</Link>
          <Link href="/" className={classes.linkBox}>Testimonials</Link>
          <Link href="/" className={classes.linkBox}>FAQ</Link>
        </Typography>

      </Box>

      {/* <a href="/">
        <Box className={classes.linkBox}>
          <p className={classes.links}>test link</p>
        </Box>
      </a>

      <a href="/">
      <Box className={classes.linkBox}>
        <p>test link</p>
      </Box>
      </a>

       <a href="/">
      <Box className={classes.linkBox}>
        <p>test link</p>
      </Box>
       </a>
       </Box> */}
      <Box>
        <Button className={classes.signUpButton} variant="contained">Sign Up</Button>
      </Box>
    </Box>    
  );
}
