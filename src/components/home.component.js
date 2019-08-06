import React, { Component } from "react";
import green from "@material-ui/core/colors/green";
import Background from "../img/background.jpg";
import Button from "@material-ui/core/Button";

const style = {
  background: {
    width: "100%",
    height: "90vh",
    background: `url(${Background})`,
    backgroundSize: "cover"
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "lighter"
  },
  button: {
    backgroundColor: green[800],
    textTransform: "uppercase"
  }
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <Background style={style.background}>
          <h1>Make an appointment today.</h1>
        </Background>
      </div>
    );
  }
}
