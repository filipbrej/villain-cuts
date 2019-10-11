import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';
import grey from '@material-ui/core/colors/grey';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Styling for footer components
const useStyles = makeStyles({
    link: {
        margin: '1rem 1.5rem',
        color: '#000'
    },
    logo: {
        color: grey[600]
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyItems='center'
        >
            <Typography gutterBottom>
                <Link
                    target='_blank'
                    className={classes.link}
                    href='https://www.facebook.com/VillainCuts/'
                >
                    <FontAwesomeIcon size='3x' icon={faFacebookSquare} />
                </Link>
                <Link
                    target='_blank'
                    className={classes.link}
                    href='https://www.instagram.com/villaincuts/'
                >
                    <FontAwesomeIcon size='3x' icon={faInstagram} />
                </Link>
            </Typography>
            <Typography gutterBottom variant='caption' color='textSecondary'>
                Designed & Developed by{' '}
                <Link
                    underline='none'
                    href='https://www.codebyfil.dev'
                    className={classes.logo}
                    target='_blank'
                >
                    Filip Brej
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
