import React, { Component } from "react";
import green from "@material-ui/core/colors/green";
import { textAlign, fontSize } from "@material-ui/system";

const headerColor = green[800];

const styles = {
  color: "#fff",
  backgroundColor: headerColor,
  fontFamily: "Pacifico",
  textAlign: "center",
  fontSize: "4rem",
  margin: "0",
  padding: "0"
};

// Logo at top of page
export default class Header extends Component {
  render() {
    return <h1 style={styles}>Villain Cuts</h1>;
  }
}
