import React from "react";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const TextMaskCustom = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      //   showMask
    />
  );
};

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

export default class ContactForm extends React.Component {
  state = {
    textmask: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Paper>
          <form method="POST">
            <Typography align="center" variant="h4">
              CONTACT ME
            </Typography>
            <Typography align="center" variant="subtitle1">
              Let's step up your style.
            </Typography>
            <TextField
              margin="normal"
              variant="outlined"
              label="Full Name"
              placeholder="Enter your full name"
            />
            <TextField
              margin="normal"
              variant="outlined"
              label="Email"
              placeholder="Enter your Email"
            />
            <TextField
              variant="outlined"
              id="maskExample"
              label="Phone Number"
              margin="normal"
              InputProps={{
                inputComponent: TextMaskCustom,
                value: this.state.textmask,
                onChange: this.handleChange("textmask")
              }}
            />
          </form>
        </Paper>
      </Box>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};
