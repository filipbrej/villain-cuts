import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
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
Screen Breakpoints: 

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
    }
});

// Model data for each tile in the grid
const tileData = [
    {
        img: cut1,
        review: '"Consistently does an excellent job."',
        name: ''
    },
    {
        img: cut2,
        review: '"Ryan takes his time and helps me feel comfortable."',
        name: 'Insoo'
    },
    {
        img: cut3,
        review: 'Always satisfied with my experience!',
        name: ''
    },
    {
        img: cut4,
        review: 'Ryan recognized what I wanted and delivered every time.',
        name: ''
    },
    {
        img: cut5,
        review: '"One of the cleanest cuts I\'ve ever had."',
        name: 'Filip'
    },
    {
        img: cut6,
        review: 'Great quality cut for less than where I normally go!',
        name: 'Erick'
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
                                <Typography variant='body2'>
                                    {tile.review}{' '}
                                </Typography>
                                <Typography
                                    variant='subtitle2'
                                    color='textSecondary'
                                >
                                    - {tile.name}
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
