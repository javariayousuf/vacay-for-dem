import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Element from "../components/Element";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "999px"
  },
  ex: {
    height: "850px",
    width: "400px",
    border: "3px solid ##333",
    backgroundColor: "#eee"
  }
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        className={classes.root}
        style={{
          display: "flex",
          flexDirection: "vertical",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className={classes.ex}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem
          integer vitae justo eget magna fermentum iaculis. A condimentum vitae
          sapien pellentesque. At imperdiet dui accumsan sit amet. Ullamcorper
          malesuada proin libero nunc consequat interdum varius sit. Mus mauris
          vitae ultricies leo. Orci sagittis eu volutpat odio facilisis mauris
          sit amet massa. Erat pellentesque adipiscing commodo elit at imperdiet
          dui accumsan. Velit dignissim sodales ut eu sem integer. Ut consequat
          semper viverra nam libero justo laoreet sit. Purus sit amet volutpat
          consequat. Nulla facilisi nullam vehicula ipsum a. Nisi porta lorem
          mollis aliquam ut porttitor leo a. Interdum varius sit amet mattis
          vulputate enim nulla. Lorem sed risus ultricies tristique nulla
          aliquet enim. Nec sagittis aliquam malesuada bibendum arcu. Tempus
          iaculis urna id volutpat lacus laoreet non curabitur. Hac habitasse
          platea dictumst quisque sagittis purus sit amet. Et netus et malesuada
          fames ac turpis egestas. Sed egestas egestas fringilla phasellus
          faucibus. Duis at consectetur lorem donec massa. Mi ipsum faucibus
          vitae aliquet nec. Eget mi proin sed libero enim. Nisl pretium fusce
          id velit ut tortor. Nunc id cursus metus aliquam eleifend mi in. Quam
          pellentesque nec nam aliquam sem et tortor consequat. Cras pulvinar
          mattis nunc sed blandit. Adipiscing diam donec adipiscing tristique
          risus nec feugiat. Vitae turpis massa sed elementum tempus egestas.
          Tempor commodo ullamcorper a lacus. Viverra tellus in hac habitasse
          platea dictumst. Sed adipiscing diam donec adipiscing tristique risus
          nec feugiat. Vitae proin sagittis nisl rhoncus. At consectetur lorem
          donec massa sapien faucibus et molestie. Tempus imperdiet nulla
          malesuada pellentesque elit eget gravida cum. Gravida dictum fusce ut
          placerat orci nulla. At quis risus sed vulputate odio ut enim blandit.
          Congue eu consequat ac felis donec et odio. Diam maecenas sed enim ut
          sem viverra. Imperdiet massa tincidunt nunc pulvinar sapien et.
          Habitasse platea dictumst quisque sagittis purus. Aliquam eleifend mi
          in nulla posuere. Nunc faucibus a pellentesque sit amet porttitor
          eget. Scelerisque in dictum non consectetur a. Arcu non sodales neque
          sodales.
        </div>
      </Box>
    </div>
  );
}
