import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = {
  card: {
    minHeight: "200px",
    width: "30%",
    margin: "1rem"
  }
};

const InfoCards = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Paper style={styles.card} elevation="3">
        <Typography variant="h6" align="center">
          A cut above the rest.
        </Typography>
        <Typography color="textSecondary" align="center">
          Haircuts starting for as little as $10.
        </Typography>
      </Paper>
      <Paper style={styles.card} elevation="3">
        <Typography variant="h6" align="center">
          Your style. Your way.
        </Typography>
        <Typography color="textSecondary" align="center">
          Haircuts starting for as little as $10.
        </Typography>
      </Paper>
      <Paper style={styles.card} elevation="3">
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
