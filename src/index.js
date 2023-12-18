import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import jonathan from './components/images/jonathan.png';
import Ariana from './components/images/Ariana.png';
import James from './components/images/James.png';
import mathew from './components/images/mathew.jpeg';
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

<Card
      name="Alice Montana"
      photo= {Ariana}
      role= "Backend Developer"
      website= "https://AliceMonta.com"
      email="mailto:example@gmail.com"
      github="https://github.com/Montanaalice"
      twitter="https://twitter.com/Montanaalice"
      instagram = "https://instagram.com/Montanaalice"
      about = "I am a Backend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
      interests = "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
    />
    <Card
      name="James Hilthon"
      photo= {James}
      role= "Graphics design"
      website= "https://jonathan.com"
      email="mailto:example@gmail.com"
      github="https://github.com/johndoe"
      linkedin="https://linkedin.com/in/johndoe"
      twitter="https://twitter.com/johndoe"
      facebook = "https://facebook.com/johndoe"
      instagram = "https://instagram.com/johndoe"
      about = "I am a passionate graphics designer with an unwavering love for visual storytelling. My canvas is the digital realm, where pixels dance to create captivating designs. Whether it’s crafting sleek logos, illustrating whimsical characters, or designing user-friendly interfaces, I thrive on turning ideas into eye-catching realities."

    />
    <Card
      name="Mathew David"
      photo= {mathew}
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
