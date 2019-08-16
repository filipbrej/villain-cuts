import React from "react";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";
// Logo styling
const styles = {
  color: "#fff",
  backgroundColor: green[800],
  fontFamily: "Pacifico",
  textAlign: "center",
  fontSize: "4rem",
  lineHeight: "1.4",
  margin: "0",
  padding: "0"
};

// Logo at top of page
export default function Logo() {
  return <h1 style={styles}>VillainCuts</h1>;
}
