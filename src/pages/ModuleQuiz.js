import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

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
  cardsDiv: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "48px",
    display: "flex",
    //flexDirection: "column",
    flexFlow: "row wrap",
    justifyContent: "center"
  },
  card: {
    // width: 500,
    // height: 300,
    display: "inline-block",
    marginTop: 100,
    backgroundColor: "#ddd",
    // "&:hover": {
    //   color: "white",
    //   backgroundColor: "#014378"
    //}
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 24
  },
  buttonBox: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10%",
    paddingBottom: "15px"
  },
  learnText:{
    paddingTop: 50,
    display: "flex",
    justifyContent: "center",
    width: "90%"

  }
}));

export default function ModuleQuiz() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.cardsDiv}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Module 1.1
              </Typography>
              <Typography variant="h5" className={classes.pos} component="h2">
                Packing for the Trip Quiz
              </Typography>
            </CardContent>
            {/* <Button variant="contained" color="primary" href="#contained-buttons">
              Next
            </Button> */}
          </Card>
      </Box>
      <Box className={classes.buttonBox}>
        <Button className={classes.nextButton} variant="contained" color="primary" href="#contained-buttons">
          Next >>
        </Button>
      </Box>
    </div>
  );
}
