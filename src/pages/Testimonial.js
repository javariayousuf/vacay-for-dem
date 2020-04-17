import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#F9F8F8",
        minHeight: "74vh"
    },
    gridContainer: {
        paddingRight: theme.spacing(10),
        PaddingLeft: theme.spacing(10),
        textAlign: "left",
        marginTop: "auto"
    },
    gridItemRight: {
        textAlign: "right"
    },
    cardsDiv: {
        width: "90%",
        paddingTop: theme.spacing(10),
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "48px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center"
      }
}));

export default function Testimonial() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box className={classes.cardsDiv}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12} md={12} className={classes.gridItem}>
                        <h2>Tara, 36</h2>
                        <h3>Virginia</h3>
                        <p>I chose to volunteer, because I’d never been involved with civic action work and it sounded really fun to be able to travel with a group of fun (hilarious, creative, kind, compassionate, the list goes on) and progressive people. 
                            I wanted to say yes to something that was outside of my comfort zone, and so I could have a hand in making a difference.</p>
                        <p>My experience showed me that talking to neighbors, building connection and supporting communities can cause change. The work wasn't as hard or as scary as I thought prior to trying it, but it sure is impactful. 
                            I am so proud of the work our team did in Virginia!</p>
                        <p>Building relationships with our team was my favorite part of the trip: It's all about the people. That's what makes the sense of urgency real, and the impact real. 
                            Although we worked hard, we never lost sight of having fun together and supporting each other. This was such a special group.</p>
                        <p>Volunteering helped me build my awareness around certain issues I knew little to nothing about. 
                            Young people have such unique and novel ideas for what we want our future look like, it's important we hone our skills and and get involved so that we can be apart of creating change!</p>  
                    </Grid>
                    <Grid item xs={12} md={12} className={classes.gridItemRight}>
                        <h2>Jaybee</h2>
                        <h3>State Volunteered</h3>
                        <p>Paragraph here</p>
                    </Grid>
                    <Grid item xs={12} md={12} className={classes.gridItem}>
                        <h2>Nate</h2>
                        <h3>State Volunteered</h3>
                        <p>Paragraph here</p>
                    </Grid>
                    <Grid item xs={12} md={12} className={classes.gridItemRight}>
                        <h2>Faiza, 25</h2>
                        <h3>Virginia</h3>
                        <p>My decision to volunteer was based on a few different reasons, one being that was looking to get back into politics and this trip seemed liked a good starting point.</p>
                        <p>This experience has taught me that canvassing isn’t all about convincing people to vote for a particular candidate. 
                            In my past experience as a campaign staffer, the hardest part of my job was feeling the need to persuade voters to vote a certain way. </p>
                        <p>My favorite part of volunteering was definitely the people I was doing it with! 
                            They made it fun and memorable. Most of the people on the trip had never canvassed before and it was a treat to get to do meaningful work with people who care and are willing to put in the hard work.
                            I really admired that we were all there for the same reasons. Having had previous experience canvassing, It felt like I was right where I needed to be. </p>
                        <p>I think everyone should volunteer so they are able to experience being apart of something that makes a difference in people’s lives and American politics. 
                            It’s simple for me: I volunteer and get involved in politics, because it’s one of the few ways citizens can make a real change. 
                            I am aware of how much my voice and my vote matters for me and for people who look like me. 
                            I'd like to encourage young people to get involved with Vacay for Democracy because it's an experience that you won't regret! </p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}