import React, { Component } from "react";
import Background from "../img/background.jpg";

const style = {
  width: "100%",
  height: "90vh",
  background: `url(${Background})`,
  backgroundSize: "cover"
};

export default class LandingImage extends Component {
  render() {
    return <div style={style} />;
  }
}
