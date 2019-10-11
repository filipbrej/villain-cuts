import React from 'react';

// Components
import Logo from './components/logo';
import Main from './components/main';
import InfoCards from './components/cards';
import Footer from './components/footer';

function App() {
    return (
        <div className='container'>
            <Logo />
            <Main />
            <InfoCards />
            <Footer />
        </div>
    );
}

export default App;
