import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../img/background.jpg';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    image: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 'calc(95vh - 137px)',
        background: `url(${Background}) center/cover`,
        backgroundSize: 'cover'
    },
    text: {
        paddingTop: '10rem',
        color: 'white',
        margin: '2rem 1rem',
        textShadow: '3px 3px 3px #000'
    },
    button: {
        color: 'white',
        padding: '0.8rem',
        fontSize: '1.2rem'
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.image}>
            <Typography className={classes.text} align='center' variant='h3'>
                Make an appointment today.
            </Typography>
            <Button
                style={{ backgroundColor: green[800] }}
                className={classes.button}
            >
                Contact Me
            </Button>
        </div>
    );
};

export default Home;
