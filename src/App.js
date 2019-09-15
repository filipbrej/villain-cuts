import React from 'react';

// Components
import Header from './components/Logo.component';
import Navbar from './components/Navbar.component';
import InfoCards from './components/InfoCards.component';
import Footer from './components/Footer.component';

function App() {
    return (
        <div className='container'>
            <Header />
            <Navbar />
            <InfoCards />
            <Footer />
        </div>
    );
}

export default App;
