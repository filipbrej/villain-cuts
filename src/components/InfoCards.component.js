import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCut, faHandshake } from '@fortawesome/free-solid-svg-icons';
import green from '@material-ui/core/colors/green';
import { typography } from '@material-ui/system';

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
                            icon={faHandshake}
                            size='2x'
                            className={classes.icon}
                        />
                    </Typography>
                    <Typography variant='h6' align='center'>
                        Your style. Your way.
                    </Typography>
                    <Typography
                        color='textSecondary'
                        align='center'
                        gutterBottom
                    >
                        Trust is a two way street.
                    </Typography>
                    <Typography>
                        Dedication to the clients and their need of hairstyles
                        fit for them should be the one goal for every haircut
                        given. Too many times, people get haircuts that the
                        STYLIST wants to give, not what the CLIENT wants to get.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xl={3} lg={4} md={4} sm={8} xs={10}>
                <Paper elevation='3' className={classes.paper}>
                    <Typography align='center'>
                        <FontAwesomeIcon
                            icon={faUsers}
                            size='2x'
                            className={classes.icon}
                        />
                    </Typography>
                    <Typography variant='h6' align='center'>
                        Small beginnings. A lasting impact.
                    </Typography>
                    <Typography
                        color='textSecondary'
                        align='center'
                        gutterBottom
                    >
                        Greatness with every snip.
                    </Typography>
                    <Typography>
                        Starting my hair cutting career at University of
                        Illinois Urbana-Champaign in my dorm’s courtyard, I
                        worked my way up to having over 70 clients coming in
                        monthly by the end of my college tenure.
                    </Typography>
                </Paper>
            </Grid>
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
                    <Typography
                        color='textSecondary'
                        align='center'
                        gutterBottom
                    >
                        Haircuts starting for as little as $10.
                    </Typography>
                    <Typography variant='body1'>
                        This was all made possible because I had a desire to
                        give college students like myself the oppportunity to
                        look fresh for an affordable price. Your trust is my
                        highest priority!
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default InfoCards;
