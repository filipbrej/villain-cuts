import React from 'react';

// Components
import Header from './components/Logo.component';
import Navbar from './components/Navbar.component';
import ContactForm from './components/Contact.component';
import Home from './components/Home.component';
import InfoCards from './components/InfoCards.component';
import Feed from './components/Feed.component';
import Footer from './components/Footer.component';

function App() {
    return (
        <div className='container'>
            <Header />
            <Navbar />
            <Home />
            <InfoCards />
            <ContactForm />
            <Feed />
            <Footer />
        </div>
    );
}

export default App;
