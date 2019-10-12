import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors/';

// Styles for each component
const styles = {
    container: {
        margin: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    paper: {
        width: '500px'
    },
    root: {
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        color: green[800]
    },
    textfield: {
        minWidth: '75%'
    }
};

// Text Mask for phone field
const TextMaskCustom = props => {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={[
                '(',
                /[1-9]/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/
            ]}
        />
    );
};

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired
};

// Styles the text fields
const StyledTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green'
        }
    }
})(TextField);

// Adds attributes to form input fields
const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            textmask: '',
            message: ''
        };
    }

    handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state })
        }).catch(error => alert(error));

        e.preventDefault();
    };

    // Handles state for input fields
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;
        const { name, email, phone, textmask, message } = this.state;
        return (
            <Box className={classes.container}>
                <Paper elevation='3' className={classes.paper}>
                    <form
                        className={classes.root}
                        onSubmit={this.handleSubmit}
                        name='contact'
                        method='POST'
                    >
                        <input type='hidden' name='form-name' value='contact' />
                        <Typography variant='h4'>CONTACT ME</Typography>
                        <Typography variant='subtitle1' color='textSecondary'>
                            Let's step up your style.
                        </Typography>

                        <StyledTextField
                            style={styles.textfield}
                            required
                            type='text'
                            name='name'
                            value={this.name}
                            margin='normal'
                            variant='standard'
                            label='Full Name'
                            onChange={this.handleChange}
                        />
                        <StyledTextField
                            style={styles.textfield}
                            required
                            type='email'
                            name='email'
                            value={this.email}
                            margin='normal'
                            variant='standard'
                            label='Email'
                            onChange={this.handleChange}
                        />
                        <StyledTextField
                            style={styles.textfield}
                            required
                            name='phone'
                            type='tel'
                            value={this.textmask}
                            variant='standard'
                            label='Phone Number'
                            margin='normal'
                            InputProps={{
                                inputComponent: TextMaskCustom,
                                value: this.state.textmask,
                                onChange: this.handleChange('textmask')
                            }}
                        />
                        <StyledTextField
                            style={styles.textfield}
                            required
                            name='message'
                            type='text'
                            value={this.message}
                            margin='normal'
                            multiline
                            rows='5'
                            variant='filled'
                            label='Message'
                            helperText='* input is required'
                            onChange={this.handleChange}
                        />
                        <Button
                            size='medium'
                            type='submit'
                            className={classes.button}
                        >
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Box>
        );
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactForm);
