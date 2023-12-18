import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import jonathan from './components/images/jonathan.png';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import ReactFact from './components/ReactFact';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div >
    <Navbar />;
    <MainContent />
    <ReactFact />
    <Footer />
    <div className='Businesscard'>
    <Card
      name="John Doe"
      photo= {jonathan}
      role= "Frontend Developer"
      website= "https://jonathan.com"
      email="https://www.w3schools.com"
      phone="+234 123 4567"
      github="https://github.com/johndoe"
      linkedin="https://linkedin.com/in/johndoe"
      twitter="https://twitter.com/johndoe"
    />
    </div>

  </div>
);

reportWebVitals();
