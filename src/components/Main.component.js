import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Background from '../img/background.jpg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { brown, green, grey } from '@material-ui/core/colors/';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

// Components for swipeable views
import ContactForm from './Contact.component';
import Feed from './Feed.component';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component='div'
            role='tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

// Create colors for app bar
const theme = createMuiTheme({
    palette: {
        primary: { main: brown[700] },
        secondary: { main: grey[50] }
    }
});

/* 
Screen Breakpoints: 

xs: 0px
sm: 600px
md: 960px
lg: 1280px
xl: 1920px

*/

// Styling for main section
const useStyles = makeStyles(theme => ({
    root: {
        background: `url(${Background}) center/cover`,
        backgroundSize: 'cover',
        width: '100%',
        height: 'calc(100vh-115px)'
    },
    box: {
        width: '100%',
        height: '70vh'
    },
    text: {
        color: 'white',
        textShadow: '3px 3px 3px #000',
        marginBottom: '1rem',
        [theme.breakpoints.down('xl')]: {
            fontSize: '7rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '4rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem'
        }
    },
    button: {
        [theme.breakpoints.down('xl')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        }
    }
}));

export default function Main() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    // handles change for when tabs change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // handles index change for swipeable views
    const handleChangeIndex = index => {
        setValue(index);
    };

    // handles switching to contact tab when button is clicked from home section
    const handleClick = (event, newValue) => {
        setValue(0);
    };
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar color='primary' position='sticky'>
                    <Tabs
                        centered
                        variant='fullWidth'
                        value={value}
                        onChange={handleChange}
                    >
                        <Tab label='Contact' />
                        <Tab label='Home' />
                        <Tab label='My Work' />
                    </Tabs>
                </AppBar>

                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <ContactForm />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Box
                            className={classes.box}
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            flexDirection='column'
                        >
                            <Typography
                                className={classes.text}
                                align='center'
                                variant='h3'
                            >
                                {'Make an appointment today.'}
                            </Typography>
                            <Button
                                onClick={handleClick}
                                className={classes.button}
                                style={{
                                    backgroundColor: green[800],
                                    color: 'white',
                                    padding: '0 1rem'
                                }}
                            >
                                Contact Me
                            </Button>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <Feed />
                    </TabPanel>
                </SwipeableViews>
            </ThemeProvider>
        </div>
    );
}
