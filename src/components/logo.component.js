import React from "react";
import green from "@material-ui/core/colors/green";

// Logo styling
const styles = {
  color: "#fff",
  backgroundColor: green[800],
  fontFamily: "Pacifico",
  textAlign: "center",
  fontSize: "4rem",
  margin: "0",
  padding: "0"
};

// Logo at top of page
const logo = () => <h1 style={styles}>VillainCuts</h1>;

export default logo;
