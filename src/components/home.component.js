import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../img/background.jpg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    box: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0
    },
    image: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100vh - 115px)'
    },
    text: {
        color: 'white',
        textShadow: '3px 3px 3px #000',
        marginBottom: '1rem'
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
            <Box
                className={classes.box}
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
            >
                <Typography
                    className={classes.text}
                    align='center'
                    variant='h3'
                >
                    Make an appointment today.
                </Typography>
                <Button
                    style={{ backgroundColor: green[800] }}
                    className={classes.button}
                >
                    Contact Me
                </Button>
            </Box>
        </div>
    );
};

export default Home;
