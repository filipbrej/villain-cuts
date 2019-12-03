import React from 'react';

// Components
import Logo from './components/logo';
import Main from './components/main';
import InfoCards from './components/cards';
import Footer from './components/footer';

function App() {
    return (
        <main>
            <div className='container'>
                <Logo />
                <Main />
                <InfoCards />
                <footer>
                    <Footer />
                </footer>
            </div>
        </main>
    );
}

export default App;
