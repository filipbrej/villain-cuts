import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '@material-ui/core/Link';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// Images for the feed
import cut1 from '../img/cut1.jpg';
import cut2 from '../img/cut2.jpg';
import cut3 from '../img/cut3.jpg';
import cut4 from '../img/cut4.jpg';
import cut5 from '../img/cut5.jpg';
import cut6 from '../img/cut6.jpg';

// Styling
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: '1rem'
    },
    gridList: {
        height: '500',
        width: '500'
    },
    icon: {
        color: 'white',
        marginRight: '1rem'
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.9) 0%, ' +
            'rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)'
    }
});

const tileData = [
    {
        img: cut1,
        review: '"Review"',
        author: '',
        link: 'https://www.instagram.com/p/BTIX3Acld9b/'
    },
    {
        img: cut2,
        review: '"Review"',
        author: '',
        link: 'https://www.instagram.com/p/BTFQMmLFPII/'
    },
    {
        img: cut3,
        review: '"Review"',
        author: '',
        link: 'https://www.instagram.com/p/BRCVJ9PlY2A/'
    },
    {
        img: cut4,
        review: '"Review"',
        author: '',
        link: 'https://www.instagram.com/p/BPLhFBLj88B/'
    },
    {
        img: cut5,
        review: '"Great cut at a great price, never been disappointed."',
        author: 'Filip',
        link: 'https://www.instagram.com/p/BPLgYmwDQFM/'
    },
    {
        img: cut6,
        review: '"Review"',
        author: 'Erick',
        link: 'https://www.instagram.com/p/BVQsT5ZFs3w/'
    }
];

export default function Feed() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={2}>
                        <img src={tile.img} alt={tile.review}></img>
                        <GridListTileBar
                            className={classes.titleBar}
                            title={tile.review}
                            subtitle={<span> - {tile.author}</span>}
                            actionIcon={
                                <Link href={tile.link} target='_blank'>
                                    <FontAwesomeIcon
                                        size='2x'
                                        className={classes.icon}
                                        icon={faInstagram}
                                    ></FontAwesomeIcon>
                                </Link>
                            }
                            actionPosition='right'
                        ></GridListTileBar>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
