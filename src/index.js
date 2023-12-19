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
      website= "https://james.com"
      email="mailto:example@gmail.com"
      github="https://github.com/jameshilthon"
      linkedin="https://linkedin.com/in/jameshilthon"
      twitter="https://twitter.com/jameshilthon"
      facebook = "https://facebook.com/jameshilthon"
      instagram = "https://instagram.com/jameshilthon"
      about = "I am a passionate graphics designer with an unwavering love for visual storytelling. My canvas is the digital realm, where pixels dance to create captivating designs. Whether it’s crafting sleek logos, illustrating whimsical characters, or designing user-friendly interfaces, I thrive on turning ideas into eye-catching realities."

    />
    <Card
      name="Mathew David"
      photo= {mathew}
      role= "Product Designer"
      website= "https://Mathew.com"
      github="https://github.com/mathewdavids"
      linkedin="https://linkedin.com/in/mathewdavids"
      twitter="https://twitter.com/mathewdavids"
      facebook = "https://facebook.com/mathewdavids"
      instagram = "https://instagram.com/mathewdavids"
      about = "I believe that every curve, every gradient, and every negative space has a purpose. As a detail-oriented creator, I obsess over kerning, alignment, and the perfect shade of blue."
      interests = "When I’m not pushing pixels, you’ll find me exploring new typefaces, experimenting with vector art, and staying up-to-date with design trends. I’m a firm believer in the power of minimalism, but I also appreciate the occasional flourish that adds that extra spark."
    />
    </div>
    <Footer />
  </div>
);

reportWebVitals();
