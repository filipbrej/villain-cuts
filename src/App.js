import React from "react";
// Components
import Header from "./components/logo.component";
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import InfoCards from "./components/InfoCards.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Home />
      <InfoCards />
      <Footer />
    </div>
  );
}

export default App;
