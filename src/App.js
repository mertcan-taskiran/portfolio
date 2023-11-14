import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Backtotop from './components/Backtotop';
import Particle from './components/Particle';
import './App.css';
import './Mode.css';

function App() {
  return (
    <div>
      <Particle />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Backtotop />
    </div>
  );
}

export default App;
