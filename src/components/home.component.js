import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Typography from '@material-ui/core/Typography';

/* 
Screen Breakpoints: 

xs: 0px
sm: 600px
md: 960px
lg: 1280px
xl: 1920px

*/
const styles = theme => ({
    root: {
        width: '100%',
        height: 'calc(100vh - 115px)',
        margin: 0,
        padding: 0
    },
    text: {
        color: 'white',
        textShadow: '3px 3px 3px #000',
        marginBottom: '1rem',
        [theme.breakpoints.down('xl')]: {
            fontSize: '7rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '4rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem'
        }
    },
    button: {
        [theme.breakpoints.down('xl')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        }
    }
});

function Home(props) {
    const { classes } = props;
    return (
        <Box
            className={classes.root}
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
        >
            <Typography className={classes.text} align='center' variant='h3'>
                {'Make an appointment today.'}
            </Typography>
            <Button
                className={classes.button}
                style={{
                    backgroundColor: green[800],
                    color: 'white',
                    padding: '0 1rem'
                }}
            >
                Contact Me
            </Button>
        </Box>
    );
}

export default withStyles(styles)(Home);
