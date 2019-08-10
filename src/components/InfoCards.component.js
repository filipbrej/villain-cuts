import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = {
  paper: {
    minHeight: "150px",
    width: "30%",
    margin: "1rem"
  },
  container: {
    display: "flex",
    flexDirection: "row"
  }
};

const InfoCards = () => {
  return (
    <div style={styles.container}>
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
    </div>
  );
};

export default InfoCards;
