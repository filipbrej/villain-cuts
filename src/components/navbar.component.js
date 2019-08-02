import React, { Component } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper/Paper";
import brown from "@material-ui/core/colors/brown";
import SwipeableViews from "react-swipeable-views";

const styles = {
  tabs: {
    backgroundColor: brown[800],
    color: brown[800]
  }
};

export default function Navbar() {
  const [value, setValue] = React.useState(1);

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
