import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F9F8F8",
    minHeight: "74vh"
  },pageTitle: {
    textAlign: "center",
    margin: 48
  },
  largeBox: {
    // height: 400,
    // width: 600,
    maxWidth: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "48px",
    // display: "flex",
    // flexFlow: "column wrap",
    justifyContent: "left",
    alignItems: "left",
    backgroundColor: "#ddd",
    borderRadius: 30
  },
  submitButton: {
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
  },
  button7: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.pageTitle}>
        Sign Up
      </Typography>
      <Grid container className = {classes.largeBox}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Name
          </Typography>
        </Grid>
      <Grid item xs={12} md={6}>
          <form className={classes.field} noValidate autoComplete="off">
            <TextField
              className={classes.field}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <form className={classes.field} noValidate autoComplete="off">
            <TextField
              className={classes.field}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </form>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h5" gutterBottom>
              Email
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <form className={classes.field} noValidate autoComplete="off">
              <TextField
                className={classes.field}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className={classes.title} variant="h5" gutterBottom>
              Phone
            </Typography>
            <form className={classes.field} noValidate autoComplete="off">
              <TextField
                className={classes.field}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className={classes.title} variant="h5" gutterBottom>
              Zipcode
            </Typography>
            <form className={classes.field} noValidate autoComplete="off">
              <TextField
                className={classes.field}
                id="outlined-basic"
                label="Zipcode"
                variant="outlined"
              />
            </form>
          </Grid>
      </Grid>

      {/* note here */}


      <Grid container className = {classes.largeBox}>
        <Grid item xs={12}> 
          <Typography variant="p" className={classes.pageTitle}>
            The following section of questions is optional. The information collected is used to optimize your 
            assigned location to better place volunteers in areas where they will feel the impact of visiting a 
            community where their skills and perspective are needed
          </Typography>
          <Typography className={classes.title} variant="h5" gutterBottom>
            How do you Identify
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Gender
          </Typography>
        </Grid>
      <Grid item xs={12} md={6}>
          <form class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="male" />
            <label class="form-check-label" for="male">
              Male
            </label>
            <input type="checkbox" class="form-check-input" id="female" />
            <label class="form-check-label" for="female">
              Female
            </label>
            <input type="checkbox" class="form-check-input" id="other" />
            <label class="form-check-label" for="other">
              Other
            </label>
            <input type="checkbox" class="form-check-input" id="notsay" />
            <label class="form-check-label" for="notsay">
              Prefer Not to Say
            </label>
          </form>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Race
          </Typography>
          <form class="form-group" class="form-check-input">
          
            <input type="checkbox" class="form-check-input" id="white" />
            <label class="form-check-label" for="white">
              White
            </label>

            <input type="checkbox" class="form-check-input" id="asian" />
            <label class="form-check-label" for="asian">
              Asian
            </label>

            <input type="checkbox" class="form-check-input" id="aian" />
            <label class="form-check-label" for="aian">
              American Indian or Alaska Native
            </label>

            <input type="checkbox" class="form-check-input" id="black" />
            <label class="form-check-label" for="black">
              Afrian American or Black
            </label>

            <input type="checkbox" class="form-check-input" id="latinx" />
            <label class="form-check-label" for="latinx">
              Latinx
            </label>

            <input type="checkbox" class="form-check-input" id="pacific" />
            <label class="form-check-label" for="pacific">
              Native Hawaiian or Pacific Islander
            </label>

            <input type="checkbox" class="form-check-input" id="other" />
            <label class="form-check-label" for="other">
              Other
            </label>
          </form>
        </Grid>

        <Grid item xs={12}> 
          <Typography className={classes.title} variant="h5" gutterBottom>
            Languages Spoken 
          </Typography>

          <form class="form-group" class="form-check-input">
          
          <input type="checkbox" class="form-check-input" id="en" />
          <label class="form-check-label" for="en">
            English
          </label>

          <input type="checkbox" class="form-check-input" id="spanish" />
          <label class="form-check-label" for="spanish">
            Spanish
          </label>

          <input type="checkbox" class="form-check-input" id="chinese" />
          <label class="form-check-label" for="chinese">
            Chinese
          </label>

          <input type="checkbox" class="form-check-input" id="french" />
          <label class="form-check-label" for="french">
            French
          </label>

          <input type="checkbox" class="form-check-input" id="tagalog" />
          <label class="form-check-label" for="tagalog">
            Tagalog
          </label>

          <input type="checkbox" class="form-check-input" id="vietnamese" />
          <label class="form-check-label" for="vietnamese">
            Vietnamese
          </label>

          <input type="checkbox" class="form-check-input" id="korean" />
          <label class="form-check-label" for="korean">
            Korean
          </label>

          <input type="checkbox" class="form-check-input" id="german" />
          <label class="form-check-label" for="german">
            German
          </label>

          <input type="checkbox" class="form-check-input" id="arabic" />
          <label class="form-check-label" for="arabic">
            Arabic
          </label>

          <input type="checkbox" class="form-check-input" id="russian" />
          <label class="form-check-label" for="russian">
            Russian
          </label>

          <input type="checkbox" class="form-check-input" id="other" />
          <label class="form-check-label" for="other">
            Other
          </label>
        </form>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Political Experience 
          </Typography>
          <form class="form-group" class="form-check-input">
        
            <input type="checkbox" class="form-check-input" id="canvas" />
            <label class="form-check-label" for="canvas">
              Canvas
            </label>

            <input type="checkbox" class="form-check-input" id="vote" />
            <label class="form-check-label" for="vote">
              Voting
            </label>

            <input type="checkbox" class="form-check-input" id="donate" />
            <label class="form-check-label" for="donate">
              Donated to a political campaign 
            </label>

            <input type="checkbox" class="form-check-input" id="upkeep" />
            <label class="form-check-label" for="upkeep">
              Keep up with the news and poltical debates
            </label>
          </form>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Anything else we should know? 
          </Typography>
          <textarea class="form-control" id="extraInfo" rows="2"> </textarea>
        </Grid>
    
      </Grid>
      <Box className={classes.button7}>
        <Button variant="outlined" className={classes.submitButton}>
          Submit
        </Button>
      </Box>
     
    </div>
  );
}
