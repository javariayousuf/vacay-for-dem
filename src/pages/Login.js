import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F9F8F8",
    minHeight: "74vh"
  },
  pageTitle: {
    textAlign: "center",
    margin: 48
  },
  loginBox: {
    height: 400,
    width: 600,
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "48px",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 30
  },
  loginButton: {
    marginTop: 24,
    width: 150,
    height: 80,
    backgroundColor: "#ddd",
    fontWeight: "bold",
    fontSize: "14pt",
    "&:hover": {
      color: "white",
      backgroundColor: "#014378"
    }
  },
  title: {
    marginBottom: 12
  },
  form: {
    width: 300
  },
  field: {
    width: 300,
    backgroundColor: "white"
  }
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.pageTitle}>
        Log In
      </Typography>
      <Box className={classes.loginBox}>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Email
        </Typography>
        <form className={classes.field} noValidate autoComplete="off">
          <TextField
            className={classes.field}
            id="outlined-basic"
            label="Type email here"
            variant="outlined"
          />
        </form>

        <Button variant="outlined" className={classes.loginButton}>
          Log In
        </Button>
      </Box>
    </div>
  );
}
