import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CapstoneInfo from "../components/CapstoneInfo";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#F9F8F8",
      display: "flex",
      flexFlow: "column nowrap",
      padding: "80px 10%",
    },
    navPadder: {
      height: "80px",
      backgroundColor:"red",
    },
    row: {
      marginBottom: "40px"
    },
    textBox: {
      width: "475px",
      marginRight: "15px",
      marginLeft: "15px",
      position: "relative",
      zIndex: "2"
    },
    demImg: {
      height: "auto",
      width: "450px",
      marginTop: "50px",
      marginRight: "30px",
      marginLeft: "30px",
      position: "relative",
      zIndex: "2"
    },
}));

export default function AboutUs() {
    const classes = useStyles();
    return (<div className={classes.root}>
      
        <Box
          className={classes.row}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className={classes.textBox}>
            
            <h1 className={classes.h1}>Why Vacay for Democracy?</h1>
            <p>
              In 2016, 131.7 million out of 213 million eligible voters in the
              United States cast a ballot in the presidential election; a
              turnout rate of 57%, with even lower rates in swing states.
              Studies show disinterest and apathy played a large role in why
              eligible Americans chose to forfeit their vote. Experts believe
              that some Americans are politically disengaged due to lack of
              education about the importance of democracy and candidates running
              for election.
            </p>
          </div>
          <img
            className={classes.demImg}
            src="https://i.imgur.com/9zii9E7.jpg"
            alt="democracy"
          />
        </Box>

        <Box
          className={classes.row}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            className={classes.demImg}
            src="https://i.imgur.com/P2fgX4h.jpg"
            alt="democracy"
          />
          <div className={classes.textBox}>
            <p>
              Democracy is based on the principle of “people’s sovereignty”, in
              other words, citizens in America can form and diffuse authority of
              their government through their elected representatives. Democracy
              allows citizens to have a voice in decision-making and guarantees
              enhanced livelihoods for it’s people. The only way to achieve
              democracy is for all citizens to participate in their elections
              and make informed decisions that impact their lives and our
              communities.g
            </p>
          </div>
        </Box>

        <Box className={classes.row}>
          <CapstoneInfo />
        </Box>
    </div>);
}