import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navtop from '../src/components/Navtop';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

//import pages


import Home from '../src/pages/Home';
import AboutUs from '../src/pages/AboutUs';
import Faqs from '../src/pages/Faqs';
import Team from '../src/pages/Team';
import Tour from '../src/pages/Tour';

ReactDOM.render(
  <App />,
  document.getElementById('root'));





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
