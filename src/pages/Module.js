import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    minHeight: "74vh"
  },
  pageTitle: {
    textAlign: "left",
    margin: 24,
    marginBottom: 0,
    fontWeight: "bold",
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
    width: "100%",
    height: "500px",
    display: "inline-block",
    backgroundColor: "#ddd"
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
  },
  demImg:{
    width: "100%"
  },
  subTitle:{
    fontWeight: "bold"
  }
}));

export default function ModulePage() {
  const classes = useStyles();

  return (    
   <div className={classes.root}>
     <div style={{ height: 100 }} />
     {/* <Typography variant="h4" className={classes.pageTitle}>
        Module 2: Canvassing, How to Interact
      </Typography> */}
     <Box className={classes.cardsDiv}>
      <Grid container spacing={3} 
      alignItems="center"
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography variant="h5" className={classes.pageTitle}>
            Module 2: Canvassing, How to Interact
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Card className={classes.card}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/sxV5Qmw0fG4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          </Card>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography variant="h5" className={classes.subTitle}>
            Knocking on Doors
          </Typography>
          Canvassing is the systematic initiation of direct contact with
          individuals, commonly used during political campaigns. Canvassing can
          be done for many reasons: political campaigning, grassroots
          fundraising, community awareness, membership drives, and more.
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <img src = "https://imgur.com/Yoh3VJc.jpg" alt="break"/>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
        <img
            className={classes.demImg}
            src="https://imgur.com/mxSR8b4.jpg"
            alt="thereason"
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography variant="h5" className={classes.subTitle}>
            Let's Work
          </Typography>
            <ul>
              <li>
                We get ready prior to travel, both on our own and with guidance from our local partner orgs. We put together teams,
                build community in those teams, train together then travel to get the work done.
              </li>
              <li>
                We walk neighborhoods to register new voters or “get-out-the-vote” with existing voters. The partner orgs create 
                maps for us to use, give us the material we need and process all the data when we’re done. We just work.
              </li>
            </ul>
          </Grid>
        <Grid item xs={3}></Grid>
      </Grid>  
     </Box>
   </div>
  );
}


// <div className={classes.root}>
// <Box className={classes.cardsDiv}>
//   <Card className={classes.card}>
//     <CardContent>
//       <Typography
//         className={classes.title}
//         color="textSecondary"
//         gutterBottom
//       >
//         1.1
//       </Typography>
//       <Typography variant="h5" className={classes.pos} component="h2">
//         Going Door to Door
//       </Typography>
      // <iframe
      //   width="100%"
      //   src="https://www.youtube.com/embed/sxV5Qmw0fG4"
      //   frameborder="0"
      //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      //   allowfullscreen
      // ></iframe>
//     </CardContent>
//     {/* <Button variant="contained" color="primary" href="#contained-buttons">
//         Next
//       </Button> */}
//   </Card>
//   <Box className={classes.learnText}>
    // Canvassing is the systematic initiation of direct contact with
    // individuals, commonly used during political campaigns. Canvassing can
    // be done for many reasons: political campaigning, grassroots
    // fundraising, community awareness, membership drives, and more.[1]
    // Campaigners knock on doors to contact people personally. Canvassing is
    // used by political parties and issue groups to identify supporters,
    // persuade the undecided, and add voters to the voters list through
    // voter registration, and it is central to get out the vote operations.
    // It is the core element of what political campaigns call the ground
    // game or field. Organized political canvassing became a central tool of
    // contested election campaigns in Britain, and has remained a core
    // practice performed by thousands of volunteers at each election there,
    // and in many countries with similar political systems. It is less
    // common in continental Europe and East Asian democracies.
//   </Box>
// </Box>
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
