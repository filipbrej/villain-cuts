import React, { Component } from "react";
import brown from "@material-ui/core/colors/brown";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper/Paper";
import SwipeableViews from "react-swipeable-views";

export default function Navbar() {
  // Styling
  const styles = theme => ({
    tabs: {
      backgroundColor: brown[800],
      color: brown[800]
    },
    indicator: {
      backgroundColor: "brown"
    }
  });

  const [value, setValue] = React.useState(1);

  // handles when different tabs are clicked
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Paper>
        <Tabs
          centered
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Contact" />
          <Tab label="Home" />
          <Tab label="Portfolio" />
        </Tabs>
      </Paper>
    </div>
  );
}
