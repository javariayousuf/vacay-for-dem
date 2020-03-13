import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import IdentityModal from "react-netlify-identity-widget";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    height: "80px",
    width: "100%",
    borderBottom: "2.5px solid #014378",
    position: "fixed",

    zIndex: "999"
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
    "&:hover": {
      backgroundColor: "#eee"
    },
    color: "inherit",
    height: "80px"
  },
  signUpButton: {
    justifyContent: "right",
    margin: "10px",
    backgroundColor: "#014378",
    fontWeight: "bold",
    color: "#FFFFFF",
    "&:hover": {
      color: "#014378"
    }
  },
  signInButton: {
    justifyContent: "right",
    margin: "10px",
    backgroundColor: "#014378",
    fontWeight: "bold",
    color: "#FFFFFF",
    "&:hover": {
      color: "#014378"
    }
  },
  inputField: {
    marginRight: 12,
    marginLeft: 12,
    marginTop: 5,
    marginBottom: 10
  },
  submitButtonBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    width: 35,
    height: 35,
    backgroundColor: "#ddd",
    fontWeight: "bold",
    fontSize: "10pt",
    marginBottom: 5,
    "&:hover": {
      color: "white",
      backgroundColor: "#014378"
    }
  },
  signOutButton: {
    display: "none",
    justifyContent: "right",
    margin: "10px",
    backgroundColor: "#014378",
    fontWeight: "bold",
    color: "#FFFFFF",
    "&:hover": {
      color: "#014378"
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [popup, changePopup] = React.useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
          <Link href="/" className={classes.linkBox}>
            About Us
          </Link>
          <Link href="/" className={classes.linkBox}>
            Destinations
          </Link>
          <Link href="/" className={classes.linkBox}>
            Testimonials
          </Link>
          <Link href="/" className={classes.linkBox}>
            FAQ
          </Link>
        </Typography>
      </Box>

      <Box>
        <a href="/#">
          <Button
            className={classes.signUpButton}
            variant="contained"
            onClick={() => changePopup(true)}
          >
            Sign Up
          </Button>
        </a>

        <a>
          <Button
            aria-describedby={id}
            onClick={handleClick}
            className={classes.signInButton}
            variant="contained"
            onClick={() => changePopup(true)}
          >
            Log In
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
            <Typography className={classes.SignInBox}>
              <form className={classes.form1} noValidate autoComplete="off">
                <Grid item xs={12}>
                  <FormControl>
                    <TextField
                      required
                      id="email"
                      label="Email Address"
                      className={classes.inputField}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <TextField
                      required
                      id="pass"
                      label="Password"
                      className={classes.inputField}
                    />
                  </FormControl>
                </Grid>
              </form>
            </Typography>
            <Box className={classes.submitButtonBox}>
              <Button variant="outlined" className={classes.submitButton}>
                GO
              </Button>
            </Box>
          </Popover>
        </a>

        <a>
          <Button className={classes.signOutButton} variant="contained">
            Sign Out
          </Button>
        </a>
      </Box>

      <IdentityModal
        showDialog={popup}
        onCloseDialog={() => changePopup(false)}
      />
    </Box>
  );
}
