import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/logo.component";
import Navbar from "./components/navbar.component";
import LandingImage from "./components/landing.component";
import InfoCards from "./components/InfoCards.component";
import SocialLinks from "./components/social.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <LandingImage />
        <InfoCards />
        <SocialLinks />
      </div>
    </Router>
  );
}

export default App;
