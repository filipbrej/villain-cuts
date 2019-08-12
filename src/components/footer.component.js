import React from "react";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const styles = {
  link: {
    margin: "0 1rem",
    fontSize: "3rem",
    color: "black"
  }
};

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
    >
      <Typography align="center" variant="h4">
        Follow us on social media!
      </Typography>
      <Typography>
        <Link
          target="_blank"
          style={styles.link}
          href="https://www.facebook.com/VillainCuts/"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Link>
        <Link
          target="_blank"
          style={styles.link}
          href="https://www.instagram.com/villaincuts/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </Typography>
      <Typography variant="caption" color="textSecondary">
        Powered/Designed by Fi Studios, LLC.
      </Typography>
    </Box>
  );
};

export default Footer;
