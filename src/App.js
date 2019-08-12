import React from "react";

// Components
import Header from "./components/Logo.component";
import Navbar from "./components/Navbar.component";
import Home from "./components/Home.component";
import Contact from "./components/Contact.component";
import InfoCards from "./components/InfoCards.component";
import Footer from "./components/Footer.component";

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Home />
      <InfoCards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
