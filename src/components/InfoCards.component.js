import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCut } from '@fortawesome/free-solid-svg-icons';
import green from '@material-ui/core/colors/green';
const styles = {
    card: {
        minHeight: '200px',
        width: '30%',
        margin: '1rem'
    },
    icon: {
        color: green[800],
        marginTop: '0.5rem'
    }
};

const InfoCards = () => {
    return (
        <Box display='flex' justifyContent='center'>
            <Paper style={styles.card} elevation='3'>
                <Typography align='center'>
                    <FontAwesomeIcon
                        icon={faCut}
                        size='2x'
                        style={styles.icon}
                    />
                </Typography>
                <Typography variant='h6' align='center'>
                    A cut above the rest.
                </Typography>
                <Typography color='textSecondary' align='center'>
                    Haircuts starting for as little as $10.
                </Typography>
            </Paper>
            <Paper style={styles.card} elevation='3'>
                <Typography align='center'>
                    <FontAwesomeIcon
                        icon={faDollarSign}
                        size='2x'
                        style={styles.icon}
                    />
                </Typography>
                <Typography variant='h6' align='center'>
                    Your style. Your way.
                </Typography>
                <Typography color='textSecondary' align='center'>
                    Haircuts starting for as little as $10.
                </Typography>
            </Paper>
            <Paper style={styles.card} elevation='3'>
                <Typography align='center'>
                    <FontAwesomeIcon
                        icon={faDollarSign}
                        size='2x'
                        style={styles.icon}
                    />
                </Typography>
                <Typography variant='h6' align='center'>
                    Your style. Your way.
                </Typography>
                <Typography color='textSecondary' align='center'>
                    Haircuts starting for as little as $10.
                </Typography>
            </Paper>
        </Box>
    );
};

export default InfoCards;
