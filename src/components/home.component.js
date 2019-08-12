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
    color: "white",
    margin: "2rem 1rem"
  },
  button: {
    backgroundColor: green[800],
    color: "white",
    padding: "0.8rem",
    fontSize: "1.2rem"
  }
};

const Home = () => {
  return (
    <div style={styles.image}>
      <Typography style={styles.text} align="center" variant="h3">
        Make an appointment today.
      </Typography>
      <Button style={styles.button}>Contact Me</Button>
    </div>
  );
};

export default Home;
