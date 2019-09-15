import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images for the data model
import cut1 from '../img/cut1.jpg';
import cut2 from '../img/cut2.jpg';
import cut3 from '../img/cut3.jpg';
import cut4 from '../img/cut4.jpg';
import cut5 from '../img/cut5.jpg';
import cut6 from '../img/cut6.jpg';

// Styling
const useStyles = makeStyles({
    item: {
        margin: '1rem'
    },
    media: {
        height: 400,
        width: 400
    },
    link: {
        color: 'black'
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

export default function Feed() {
    const classes = useStyles();
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
}
