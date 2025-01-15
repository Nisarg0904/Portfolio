import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Testimonials from './components/testimonials/Testimonials';
import Plans from './components/Plans/Plans';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ColorSwitch from './components/Colorswitcher/ColorSwitch';

const App = () => {
  return (
    <main className="main">
    <ColorSwitch/>
      <Header/>
      <Home/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Testimonials/>
      <Plans/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
