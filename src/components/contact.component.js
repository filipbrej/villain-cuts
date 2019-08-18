import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors/';

const styles = {
    container: {
        margin: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    root: {
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        color: green[800],
        padding: '0.8rem',
        fontSize: '1rem'
    },
    textfield: {
        minWidth: '75%'
    }
};

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

const ContactTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green'
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'green'
            }
        }
    }
})(TextField);

class ContactForm extends React.Component {
    state = {
        textmask: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.container}>
                <Paper elevation='3' style={{ minWidth: '40%' }}>
                    <form method='POST' className={classes.root}>
                        <Typography variant='h4'>CONTACT ME</Typography>
                        <Typography variant='subtitle1'>
                            Let's step up your style.
                        </Typography>

                        <ContactTextField
                            style={styles.textfield}
                            required
                            margin='normal'
                            variant='outlined'
                            label='Full Name'
                        />
                        <ContactTextField
                            style={styles.textfield}
                            type='email'
                            required
                            margin='normal'
                            variant='outlined'
                            label='Email'
                        />
                        <ContactTextField
                            style={styles.textfield}
                            required
                            variant='outlined'
                            label='Phone Number'
                            margin='normal'
                            InputProps={{
                                inputComponent: TextMaskCustom,
                                value: this.state.textmask,
                                onChange: this.handleChange('textmask')
                            }}
                        />
                        <ContactTextField
                            style={styles.textfield}
                            required
                            margin='normal'
                            multiline
                            rows='5'
                            variant='outlined'
                            label='Message'
                            helperText='* input is required'
                        />
                        <Button className={classes.button}>Submit</Button>
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
