import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = {
  paper: {
    minHeight: "150px",
    width: "30%",
    margin: "1rem"
  }
};

const InfoCards = () => {
  return (
    <Box display="flex">
      <Paper style={styles.paper} elevation="3">
        <Typography variant="h6" align="center">
          Your style. Your way.
        </Typography>
        <Typography color="textSecondary" align="center">
          Haircuts starting for as little as $10.
        </Typography>
      </Paper>
      <Paper style={styles.paper} elevation="3">
        <Typography variant="h6" align="center">
          Your style. Your way.
        </Typography>
        <Typography color="textSecondary" align="center">
          Haircuts starting for as little as $10.
        </Typography>
      </Paper>
      <Paper style={styles.paper} elevation="3">
        <Typography variant="h6" align="center">
          Your style. Your way.
        </Typography>
        <Typography color="textSecondary" align="center">
          Haircuts starting for as little as $10.
        </Typography>
      </Paper>
    </Box>
  );
};

export default InfoCards;
