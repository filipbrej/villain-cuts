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
    height: "90vh",
    background: `url(${Background})`,
    backgroundSize: "cover"
  },
  text: {
    paddingTop: "6rem",
    color: "white"
  },
  button: {
    backgroundColor: green[800],
    color: "white",
    // left: "600px",
    padding: "1rem",
    fontSize: "1rem"
  }
};

export default class LandingImage extends Component {
  render() {
    return (
      <div style={styles.image}>
        <Typography
          style={styles.text}
          align="center"
          paragraph="true"
          variant="h2"
        >
          Make an appointment today.
        </Typography>
        <Typography variant="button" align="center">
          <Button style={styles.button}>Make an appointment</Button>
        </Typography>
      </div>
    );
  }
}
