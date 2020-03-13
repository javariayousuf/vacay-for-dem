import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from 'react-responsive-modal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F9F8F8",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "left",
    alignItems: "left",
    // minHeight: "74vh"

    "& .MuiTextField-root": {
      // margin: theme.spacing(1)
    }
  },
  textField2: {
    marginRight: 12
  },
  form1: {},
  pageTitle2: {
    textAlign: "center",
    marginTop: 96,
    marginBottom: 24
  },
  largeBox: {
    width: 800,
    maxWidth: "95%",
    borderRadius: 30,

    padding: 24,

    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "48px",

    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "left",
    alignItems: "left",

    backgroundColor: "#ddd"
  },
  optionalInfo: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 48,
    marginBottom: 48,
    width: 752,
    maxWidth: "90%"
  },
  submitButtonBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    width: 150,
    height: 80,
    backgroundColor: "#ddd",
    fontWeight: "bold",
    fontSize: "14pt",
    "&:hover": {
      color: "white",
      backgroundColor: "#014378"
    },

    marginBottom: 48
  },
  title: {
    marginBottom: 6,
    marginTop: 18
  },
  form: {
    width: 300
  },
  formRow: {
    marginTop: 24
  },
  field: {
    width: 300,
    backgroundColor: "white"
  }
}));

export default function Signup() {
  const classes = useStyles();

  const [value, setValue] = React.useState("female");

  const handleGenderChange = event => {
    setValue(event.target.value);
  };

  const [raceState, setRaceState] = React.useState({
    white: false,
    asian: false,
    aian: false,
    black: false,
    latinx: false,
    nhpi: false,
    otherRace: false
  });

  const handleRaceChange = name => event => {
    setRaceState({ ...raceState, [name]: event.target.checked });
  };

  const { white, asian, aian, black, latinx, nhpi, otherRace } = raceState;

  const [langState, setLangState] = React.useState({
    english: false,
    spanish: false,
    mandarin: false,
    cantonese: false,
    french: false,
    tagalog: false,
    vietnamese: false,
    korean: false,
    german: false,
    arabic: false,
    russian: false,
    otherLang: false
  });

  const handleLangChange = name => event => {
    setLangState({ ...langState, [name]: event.target.checked });
  };

  const {
    english,
    spanish,
    mandarin,
    cantonese,
    french,
    tagalog,
    vietnamese,
    korean,
    german,
    arabic,
    russian,
    otherLang
  } = langState;

  const [politicalState, setPoliticalState] = React.useState({
    canvas: false,
    vote: false,
    donate: false,
    news: false
  });

  const handlePoliticalChange = name => event => {
    setPoliticalState({ ...politicalState, [name]: event.target.checked });
  };

  const { canvas, vote, donate, news } = politicalState;

  const [anythingElse, setAnythingElseValue] = React.useState();

  const handleAnythingElseChange = event => {
    setAnythingElseValue(event.target.value);
  };
 
  // Modal
  const [openState, setOpenState] = React.useState({
    open: false,
  });

  const onOpenModal = () => {
    setOpenState({ open: true });
  };
 
  const onCloseModal = () => {
    setOpenState({ open: false });
  };

  const { open } = openState;

  // const error =
  //   [white, asian, aian, black, latinx, nhpi, other].filter(v => v).length !==
  //   2;

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.pageTitle2}>
        Sign Up
      </Typography>

      <Grid container className={classes.largeBox}>
        <form className={classes.form1} noValidate autoComplete="off">
          <Grid item container className={classes.nameRow}>
            <Grid item xs={12}>
              <Typography className={classes.title} variant="h5">
                Contact Info
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl>
                <TextField
                  required
                  id="first-name"
                  label="First Name"
                  className={classes.textField2}
                />
              </FormControl>
              <FormControl>
                <TextField
                  required
                  id="last-name"
                  label="Last Name"
                  className={classes.textField2}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <TextField
                required
                id="email"
                label="Email Address"
                className={classes.textField2}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <TextField
                required
                id="phone"
                label="Phone Number"
                className={classes.textField2}
              />
            </FormControl>
            <FormControl>
              <TextField
                required
                id="zip"
                label="Zip Code"
                className={classes.textField2}
              />
            </FormControl>
          </Grid>
        </form>
      </Grid>

      <Typography variant="body1" className={classes.optionalInfo}>
        The following section of questions is <b>optional</b> and will not be shared with any outside parties.
        However, we encourage volunteers to provide us with this information as it is used to optimize your
        assigned location to better place you in areas where you will feel the impact of visiting a community
        where your skills and perspective are needed. Examples of this may be a commonality between language spoken or a high
        population the race which you self-identify as within the community.
      </Typography>

      {/* note here */}

      <Grid container className={classes.largeBox}>
        <form className={classes.form1} noValidate autoComplete="off">
          <Grid item container className={classes.nameRow}>
            <Grid item xs={12}>
              <Typography
                className={classes.title}
                variant="h5"
                gutterBottom
                style={{ marginBottom: 24 }}
              >
                How do you identify?
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.formRow}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={value}
                  onChange={handleGenderChange}
                  row
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="nb"
                    control={<Radio />}
                    label="Non-binary"
                  />
                  <FormControlLabel
                    value="unknown"
                    control={<Radio />}
                    label="Prefer not to say"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.formRow}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Race</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={white}
                        onChange={handleRaceChange("white")}
                        value="white"
                      />
                    }
                    label="White"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={asian}
                        onChange={handleRaceChange("asian")}
                        value="asian"
                      />
                    }
                    label="Asian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={aian}
                        onChange={handleRaceChange("aian")}
                        value="aian"
                      />
                    }
                    label="American Indian or Alaska Native"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={black}
                        onChange={handleRaceChange("black")}
                        value="black"
                      />
                    }
                    label="African American or Black"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={latinx}
                        onChange={handleRaceChange("latinx")}
                        value="latinx"
                      />
                    }
                    label="Latinx"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={nhpi}
                        onChange={handleRaceChange("nhpi")}
                        value="nhpi"
                      />
                    }
                    label="Native Hawaiian or Pacific Islander"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={otherRace}
                        onChange={handleRaceChange("otherRace")}
                        value="otherRace"
                      />
                    }
                    label="Other"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.formRow}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Languages spoken</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={english}
                        onChange={handleLangChange("english")}
                        value="english"
                      />
                    }
                    label="English"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={spanish}
                        onChange={handleLangChange("spanish")}
                        value="spanish"
                      />
                    }
                    label="Spanish"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={mandarin}
                        onChange={handleLangChange("mandarin")}
                        value="mandarin"
                      />
                    }
                    label="Mandarin"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={cantonese}
                        onChange={handleLangChange("cantonese")}
                        value="cantonese"
                      />
                    }
                    label="Cantonese"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={french}
                        onChange={handleLangChange("french")}
                        value="french"
                      />
                    }
                    label="French"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={tagalog}
                        onChange={handleLangChange("tagalog")}
                        value="tagalog"
                      />
                    }
                    label="Tagalog"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={vietnamese}
                        onChange={handleLangChange("vietnamese")}
                        value="vietnamese"
                      />
                    }
                    label="Vietnamese"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={korean}
                        onChange={handleLangChange("korean")}
                        value="korean"
                      />
                    }
                    label="Korean"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={german}
                        onChange={handleLangChange("german")}
                        value="german"
                      />
                    }
                    label="German"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={arabic}
                        onChange={handleLangChange("arabic")}
                        value="arabic"
                      />
                    }
                    label="Arabic"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={russian}
                        onChange={handleLangChange("russian")}
                        value="russian"
                      />
                    }
                    label="Russian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={otherLang}
                        onChange={handleLangChange("otherLang")}
                        value="otherLang"
                      />
                    }
                    label="Other"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.formRow}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Political experience</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={canvas}
                        onChange={handlePoliticalChange("canvas")}
                        value="canvas"
                      />
                    }
                    label="Canvasssing"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={vote}
                        onChange={handlePoliticalChange("vote")}
                        value="vote"
                      />
                    }
                    label="Voting"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={donate}
                        onChange={handlePoliticalChange("donate")}
                        value="donate"
                      />
                    }
                    label="Donated to a political campaign"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={news}
                        onChange={handlePoliticalChange("news")}
                        value="news"
                      />
                    }
                    label="Keep up with the news and poltical debates"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <TextField
                id="anythingElse"
                label="Anything else we should know?"
                multiline
                rowsMax="4"
                value={anythingElse}
                onChange={handleAnythingElseChange}
                style={{ width: 300 }}
                className={classes.textField2}
              />
            </FormControl>
          </Grid>
        </form>
      </Grid>

      <Box className={classes.submitButtonBox}>
        <div className="row justify-content-center">
          <Button variant="outlined" className={classes.submitButton} onClick={onOpenModal}>
            Submit
          </Button>
          <Modal open={open} onClose={onCloseModal} center>
          <Box><p>Thank you for submitting your response, you will recieve an e-mail shorly with recommended 
            trip assignments based on your submission.</p>
            <p>To begin completing your training modules, click <a href="/training">here</a>.</p>
            </Box>
          </Modal>
        </div>
      </Box>
    </div>
  );
}
