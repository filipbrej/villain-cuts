import React, { Component } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import brown from "@material-ui/core/colors/brown";

const styles = {
  backgroundColor: brown[800]
};

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Tabs centered indicatorColor="primary" style={styles}>
          <Tab label="Contact" />
          <Tab label="Home" />
          <Tab label="Portfolio" />
        </Tabs>
      </div>
    );
  }
}
