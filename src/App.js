import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navtop from './components/Navtop';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../src/pages/Home';
import AboutUs from '../src/pages/AboutUs';
import Faqs from '../src/pages/Faqs';
import Team from '../src/pages/Team';
import Tour from '../src/pages/Tour';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navtop />
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="AboutUs" element={<AboutUs />} />
          <Route exact path="Faqs" element={<Faqs />} />
          <Route exact path="Team" element={<Team />} />
          <Route exact path="Tour" element={<Tour />} />
          <Route exact path="Contact" element={<Contact />} />

        </Routes>

      </Router>
      <Footer />
    </div>

  );
}

export default App;