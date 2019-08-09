import React, { Component } from "react";
import brown from "@material-ui/core/colors/brown";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import SwipeableViews from "react-swipeable-views";

export default function Navbar() {
  // Styling
  const styles = {
    appBar: {
      background: brown[700]
    }
  };

  // handles when different tabs are clicked
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <AppBar position="sticky" style={styles.appBar}> */}
      <Tabs centered variant="fullWidth" value={value} onChange={handleChange}>
        <Tab label="Contact" />
        <Tab label="Home" />
        <Tab label="Portfolio" />
      </Tabs>
      {/* </AppBar> */}
    </div>
  );
}
