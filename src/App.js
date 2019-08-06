import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/header.component";
import Navbar from "./components/navbar.component";
import LandingImage from "./components/landing.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <LandingImage />
      </div>
    </Router>
  );
}

export default App;
