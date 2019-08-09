import React from "react";
import Typography from "@material-ui/core/Typography";
const styles = {
  div: {
    width: "100%",
    height: "auto",
    backgroundColor: "black"
  },
  title: {
    color: "white",
    fontSize: "2rem"
  },
  icons: {
    color: "white",
    fontSize: "1rem"
  }
};

const SocialLinks = () => {
  return (
    <div style={styles.div}>
      <Typography align="center" style={styles.title}>
        Follow us on social media!
      </Typography>
    </div>
  );
};

export default SocialLinks;
