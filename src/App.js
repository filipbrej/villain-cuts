import React from 'react';

// Components
import Logo from './components/logo';
import Main from './components/main';
import InfoCards from './components/cards';
import Footer from './components/footer';

function App() {
    return (
        <div className='container'>
            <main>
                <Logo />
                <Main />
                <InfoCards />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
