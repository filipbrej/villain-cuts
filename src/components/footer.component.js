import React from 'react';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';
import grey from '@material-ui/core/colors/grey';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = {
    link: {
        margin: '1rem 1.5rem',
        fontSize: '4rem',
        color: 'black'
    },
    logo: {
        textDecoration: 'none',
        color: grey[600]
    }
};

const Footer = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyItems='center'
        >
            <Typography align='center' variant='h4'>
                Follow us on social media!
            </Typography>
            <Typography>
                <Link
                    target='_blank'
                    style={styles.link}
                    href='https://www.facebook.com/VillainCuts/'
                >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </Link>
                <Link
                    target='_blank'
                    style={styles.link}
                    href='https://www.instagram.com/villaincuts/'
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
            </Typography>
            <Typography gutterBottom variant='caption' color='textSecondary'>
                Designed & Developed by{' '}
                <Link
                    style={styles.logo}
                    target='_blank'
                    href='https://www.fistudios.io'
                >
                    Fi Studios, LLC.
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
