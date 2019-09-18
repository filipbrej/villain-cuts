import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

// Styling for logo
const useStyles = makeStyles(theme => ({
    logo: {
        color: '#fff',
        backgroundColor: green[800],
        fontFamily: 'Pacifico',
        textAlign: 'center',
        fontSize: '3rem',
        lineHeight: '1.4',
        margin: '0',
        padding: '0'
    }
}));

export default function Logo() {
    const classes = useStyles();
    return <h1 className={classes.logo}>VillainCuts</h1>;
}
