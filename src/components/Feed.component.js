import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images for the data model
import cut1 from '../img/cut1.jpg';
import cut2 from '../img/cut2.jpg';
import cut3 from '../img/cut3.jpg';
import cut4 from '../img/cut4.jpg';
import cut5 from '../img/cut5.jpg';
import cut6 from '../img/cut6.jpg';

/* 
Screen Breakpoints (from Material UI docs): 

xs: 0px
sm: 600px
md: 960px
lg: 1280px
xl: 1920px

*/

// Screen sizes
const xlSize = 350;
const lgSize = 250;
const mdSize = 250;
const smSize = 200;
const xsSize = 200;

// Styles for each component
const styles = theme => ({
    item: {
        margin: '1rem',
        [theme.breakpoints.down('xl')]: { maxWidth: xlSize },
        [theme.breakpoints.down('lg')]: { maxWidth: lgSize },
        [theme.breakpoints.down('md')]: { maxWidth: mdSize },
        [theme.breakpoints.down('sm')]: { maxWidth: smSize },
        [theme.breakpoints.down('xs')]: { maxWidth: xsSize }
    },
    media: {
        [theme.breakpoints.down('xl')]: { height: xlSize, width: xlSize },
        [theme.breakpoints.down('lg')]: { height: lgSize, width: lgSize },
        [theme.breakpoints.down('md')]: { height: mdSize, width: mdSize },
        [theme.breakpoints.down('sm')]: { height: smSize, width: smSize },
        [theme.breakpoints.down('xs')]: { height: xsSize, width: xsSize }
    },
    link: {
        color: green[800]
    }
});

// Model for reviews and photos
const tileData = [
    {
        img: cut1,
        review: 'Consistently does an excellent job.',
        link: 'https://www.instagram.com/p/BTIX3Acld9b/'
    },
    {
        img: cut2,
        review: 'Ryan takes his time and helps me feel comfortable.',
        link: 'https://www.instagram.com/p/BTFQMmLFPII/'
    },
    {
        img: cut3,
        review: 'Always satisfied with my experience!',
        link: 'https://www.instagram.com/p/BRCVJ9PlY2A/'
    },
    {
        img: cut4,
        review: 'Ryan recognized what I wanted and delivered every time.',
        link: 'https://www.instagram.com/p/BPLhFBLj88B/'
    },
    {
        img: cut5,
        review: "One of the cleanest cuts I've ever had.",
        link: 'https://www.instagram.com/p/BPLgYmwDQFM/'
    },
    {
        img: cut6,
        review: 'Great quality cut for less than where I normally go!',
        link: 'https://www.instagram.com/p/BVQsT5ZFs3w/'
    }
];
const Feed = props => {
    const { classes } = props;
    return (
        <div>
            <Grid container justify='center'>
                {tileData.map(tile => (
                    <Grid className={classes.item} item>
                        <Card>
                            <CardMedia
                                className={classes.media}
                                image={tile.img}
                            ></CardMedia>
                            <CardContent>
                                <Typography variant='body2' gutterBottom>
                                    "{tile.review}"{' '}
                                </Typography>
                                <Typography variant='subtitle2'>
                                    <Link
                                        underline='none'
                                        href={tile.link}
                                        target='_blank'
                                        className={classes.link}
                                    >
                                        VIEW ON INSTAGRAM
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Feed);
