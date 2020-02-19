import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eee",
    borderTop: "1px solid #333"
  },
  gridContainer: {
    padding: theme.spacing(4),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  emailContainer: {
    paddingLeft: "10px"
  },
  emailInput: {
    marginTop: "10px",
    padding: "7px",
    textAlign: "left",
    fontWeight: "10"
  },
  links: {
    color: "inherit",
    textDecoration: "none"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
<<<<<<< HEAD
          height: "100%",
        }}>
        <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.emailContainer}>
            <h2>Join the list</h2>
            <p>Need more information? Subscribe to our monthly newsletter to recieve updates
            <br/>on upcoming trips and the latest from Vacay for Democracy.
            <br/><input type="email" id="email" name="email" value='Your email' size="90" className={classes.emailInput}></input></p>
        </Grid>
        <Grid item xs={12} md={3}>
            <h2>Contact</h2>
            <p>1411 4th Avenue Suite 1000
            <br/>Seattle, WA 98101</p>
            <p><a href="mailto:hello@commonpurposenow.org" target="_top" className={classes.links}>hello@cpnxt.org</a></p>
        </Grid>
        <Grid item xs={12} md={3}>
=======
          height: "100%"
        }}
      >
        <Grid container spacing={0} className={classes.gridContainer}>
          <Grid item xs={12} md={6} className={classes.emailContainer}>
            <h2>Join the list</h2>
            <p>
              Need more information? Subscribe to our monthly newsletter to
              recieve updates
              <br />
              on upcoming trips and the latest from Common Purpose.
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value="Your email"
                size="90"
                className={classes.emailInput}
              ></input>
            </p>
          </Grid>
          <Grid item xs={12} md={3}>
            <h2>Contact</h2>
            <p>
              1411 4th Avenue Suite 1000
              <br />
              Seattle, WA
              <br />
              98101
            </p>
            <p>
              <a
                href="mailto:hello@commonpurposenow.org"
                target="_top"
                className={classes.links}
              >
                hello@commonpurposenow.org
              </a>
            </p>
          </Grid>
          <Grid item xs={12} md={3}>
>>>>>>> origin/master
            <h2>Follow us</h2>
            <p>
              <a
                href="https://www.instagram.com/cpnxt/"
                target="_blank"
                className={classes.links}
              >
                Instagram
              </a>
              <br />
              <a
                href="https://twitter.com/cpnxt"
                target="_blank"
                className={classes.links}
              >
                Twitter
              </a>
              <br />
              <a
                href="https://www.moreperfectaf.com/"
                target="_blank"
                className={classes.links}
              >
                Podcast
              </a>
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
