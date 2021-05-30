import React, { useState, useEffect, useLayoutEffect } from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rentals from "./pages/Rentals";
import Listing from "./components/Listing";
import Homes from "./pages/Homes";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/homes" component={Homes} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
