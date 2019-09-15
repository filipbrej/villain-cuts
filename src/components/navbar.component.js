import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Background from '../img/background.jpg';
import Box from '@material-ui/core/Box';
import { createMuiTheme, makeStyles, useTheme } from '@material-ui/core/styles';
import { brown, grey } from '@material-ui/core/colors/';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

// Components for swipeable views
import ContactForm from './Contact.component';
import Home from './Home.component';
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

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`
    };
}

// Create colors for app bar
const theme = createMuiTheme({
    palette: {
        primary: { main: brown[700] },
        secondary: { main: grey[50] }
    }
});

// background for each tab
const useStyles = makeStyles(theme => ({
    root: {
        background: `url(${Background}) center/cover`,
        backgroundSize: 'cover',
        width: '100%',
        height: 'calc(100vh-115px)'
    }
}));

export default function Navbar() {
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
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar color='primary' position='sticky'>
                    <Tabs
                        centered
                        variant='fullWidth'
                        value={value}
                        onChange={handleChange}
                        aria-label='full width tabs example'
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
                        <ContactForm></ContactForm>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Home></Home>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        {' '}
                        <Feed></Feed>
                    </TabPanel>
                </SwipeableViews>
            </ThemeProvider>
        </div>
    );
}
