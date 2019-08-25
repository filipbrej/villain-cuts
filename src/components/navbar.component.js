import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme } from '@material-ui/core/styles';
import { brown, grey } from '@material-ui/core/colors/';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: brown[700] },
        secondary: { main: grey[50] }
    }
});

export default function Navbar() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
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
            </ThemeProvider>
        </div>
    );
}
