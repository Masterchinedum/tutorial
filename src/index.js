import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Navbar.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div >
    <Navbar />;
    <MainContent />
    <Footer />
  </div>
);

reportWebVitals();
