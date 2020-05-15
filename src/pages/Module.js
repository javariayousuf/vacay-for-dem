import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
    backgroundColor: "#013660"
    // "&:hover": {
    //   color: "white",
    //   backgroundColor: "#014378"
    //}
  },
  title: {
    fontSize: 20,
    color: "white"
  },
  pos: {
    paddingTop : 12,
    marginBottom: 24,
    color : "white"
  },
  buttonBox: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10%",
    paddingBottom: "3%"
  },
  learnText: {
    paddingTop: 50,
    display: "flex",
    justifyContent: "center",
    width: "75%"
  }
}));

export default function ModulePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.root}>
        <Card className={classes.card}>

        </Card>
      </Box>

      <Box className={classes.buttonBox}>
        {/* <a href="/module-01-quiz"> */}
        <Button
          className={classes.nextButton}
          variant="contained"
          color="primary"
          href="/module-02-quiz"
        >
          Next >>
        </Button>
        {/* </a> */}
      </Box>
    </div>
    
    // <div className={classes.root}>
    //   <Box className={classes.cardsDiv}>
    //     <Card className={classes.card}>
    //       <CardContent>
    //         {/* <Typography
    //           className={classes.title}
    //           color="textSecondary"
    //           gutterBottom
    //         >
    //           1.1
    //         </Typography> */}
    //         <Typography variant="h5" className={classes.pos} component="h2">
    //           Going Door to Door
    //         </Typography>
    //         <iframe
    //           width="1120"
    //           height="630"
    //           src="https://www.youtube.com/embed/sxV5Qmw0fG4"
    //           frameborder="0"
    //           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //           allowfullscreen
    //         ></iframe>
    //       </CardContent>
    //       {/* <Button variant="contained" color="primary" href="#contained-buttons">
    //           Next
    //         </Button> */}
    //     </Card>
    //     <Box className={classes.learnText}>
    //       Canvassing is the systematic initiation of direct contact with
    //       individuals, commonly used during political campaigns. Canvassing can
    //       be done for many reasons: political campaigning, grassroots
    //       fundraising, community awareness, membership drives, and more.[1]
    //       Campaigners knock on doors to contact people personally. Canvassing is
    //       used by political parties and issue groups to identify supporters,
    //       persuade the undecided, and add voters to the voters list through
    //       voter registration, and it is central to get out the vote operations.
    //       It is the core element of what political campaigns call the ground
    //       game or field. Organized political canvassing became a central tool of
    //       contested election campaigns in Britain, and has remained a core
    //       practice performed by thousands of volunteers at each election there,
    //       and in many countries with similar political systems. It is less
    //       common in continental Europe and East Asian democracies.
    //     </Box>
    //   </Box>
      // <Box className={classes.buttonBox}>
      //   {/* <a href="/module-01-quiz"> */}
      //   <Button
      //     className={classes.nextButton}
      //     variant="contained"
      //     color="primary"
      //     href="/module-02-quiz"
      //   >
      //     Next >>
      //   </Button>
      //   {/* </a> */}
      // </Box>
    // </div>
  );
}
