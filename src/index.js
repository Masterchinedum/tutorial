import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import ReactFact from './components/ReactFact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div >
    <Navbar />;
    <MainContent />
    <ReactFact />
    <Footer />

  </div>
);

reportWebVitals();
