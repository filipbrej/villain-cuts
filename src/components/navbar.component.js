import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { TheeProvider } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";
import green from "@material-ui/core/colors/green";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import SwipeableViews from "react-swipeable-views";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: green[800] },
    secondary: { main: brown[700] }
  }
});

export default function Navbar() {
  // handles when different tabs are clicked
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Tabs
          centered
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Contact" />
          <Tab label="Home" />
          <Tab label="Portfolio" />
        </Tabs>
      </ThemeProvider>
    </div>
  );
}
