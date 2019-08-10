import React, { Component } from "react";
import Background from "../img/background.jpg";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";

const styles = {
  image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "calc(90vh - 137px)",
    background: `url(${Background})`,
    backgroundSize: "cover"
  },
  text: {
    paddingTop: "10rem",
    color: "white"
  },
  button: {
    backgroundColor: green[800],
    color: "white",
    padding: "0.8rem",
    fontSize: "1.2rem"
  }
};

export default class Home extends Component {
  // Click button to switch to contact form tab
  contactButtonClicked = () => {};
  render() {
    return (
      <div style={styles.image}>
        <Typography
          style={styles.text}
          align="center"
          gutterBottom="true"
          variant="h2"
        >
          Make an appointment today.
        </Typography>
        <Button style={styles.button}>Contact Me</Button>
      </div>
    );
  }
}
