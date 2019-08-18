import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDollarSign,
    faCut,
    faComments
} from '@fortawesome/free-solid-svg-icons';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    icon: {
        color: green[800]
    }
}));

const InfoCards = () => {
    const classes = useStyles();

    return (
        <Grid container justify='center'>
            <Grid item xl={3} lg={4} md={4} sm={8} xs={10}>
                <Paper elevation='3' className={classes.paper}>
                    <Typography align='center'>
                        <FontAwesomeIcon
                            icon={faCut}
                            size='2x'
                            className={classes.icon}
                        />
                    </Typography>
                    <Typography variant='h6' align='center'>
                        A cut above the rest.
                    </Typography>
                    <Typography color='textSecondary' align='center'>
                        Haircuts starting for as little as $10.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xl={3} lg={4} md={4} sm={8} xs={10}>
                <Paper elevation='3' className={classes.paper}>
                    <Typography align='center'>
                        <FontAwesomeIcon
                            icon={faDollarSign}
                            size='2x'
                            className={classes.icon}
                        />
                    </Typography>
                    <Typography variant='h6' align='center'>
                        Your style. Your way.
                    </Typography>
                    <Typography color='textSecondary' align='center'>
                        Haircuts starting for as little as $10.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xl={3} lg={4} md={4} sm={8} xs={10}>
                <Paper elevation='3' className={classes.paper}>
                    <Typography align='center'>
                        <FontAwesomeIcon
                            icon={faComments}
                            size='2x'
                            className={classes.icon}
                        />
                    </Typography>
                    <Typography variant='h6' align='center'>
                        Your style. Your way.
                    </Typography>
                    <Typography color='textSecondary' align='center'>
                        Haircuts starting for as little as $10.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default InfoCards;
