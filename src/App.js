import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/header.component";
import Navbar from "./components/navbar.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
