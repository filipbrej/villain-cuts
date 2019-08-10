import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
    >
      <Typography align="center" variant="h4" paragraph="true">
        Follow us on social media!
      </Typography>
      <Typography variant="caption" color="textSecondary" paragraph="true">
        Powered/Designed by Fi Studios, LLC.
      </Typography>
    </Box>
  );
};

export default Footer;
