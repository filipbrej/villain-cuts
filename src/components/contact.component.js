import React from "react";
import Box from "@material-ui/core/Box";
import Textfield from "@material-ui/core/Textfield";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
const Form = () => {
  return (
    <Paper>
      <form noValidate autoComplete="off" autoCorrect="off">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Contact Me</Typography>
          <Typography variant="caption" color="textSecondary">
            Step up your style.
          </Typography>
          <Textfield />
          <Textfield />
          <Textfield />
        </Box>
      </form>
    </Paper>
  );
};

export default Form;
