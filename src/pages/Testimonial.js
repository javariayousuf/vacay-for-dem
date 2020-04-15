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
        padding: theme.spacing(4),
        textAlign: "left",
        marginTop: "auto"
    },
    cardsDiv: {
        width: "90%",
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
                        <p>Paragraph here</p>
                    </Grid>
                    <Grid item xs={12} md={12} className={classes.gridItem}>
                        <h2>Jaybee</h2>
                        <p>Paragraph here</p>
                    </Grid>
                    <Grid item xs={12} md={12} className={classes.gridItem}>
                        <h2>Nate</h2>
                        <p>Paragraph here</p>
                    </Grid>
                    <Grid item xs={12} md={12} className={classes.gridItem}>
                        <h2>Faiza</h2>
                        <p>Paragraph here</p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}