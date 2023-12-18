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
    <div className='Businesscard'>
    <Card
      name="John Doe"
      photo= {jonathan}
      role= "Frontend Developer"
      website= "https://jonathan.com"
      email="mailto:example@gmail.com"
      github="https://github.com/johndoe"
      linkedin="https://linkedin.com/in/johndoe"
      twitter="https://twitter.com/johndoe"
      facebook = "https://facebook.com/johndoe"
      instagram = "https://instagram.com/johndoe"
      about = "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
      interests = "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
    />
    </div>
    <Footer />
  </div>
);

reportWebVitals();
