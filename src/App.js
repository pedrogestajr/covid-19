import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Prevention from './components/Prevention';
import Symptoms from './components/Symptoms';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Prevention />
      <Symptoms />
      <Footer />
    </React.Fragment>
  );
}

export default App;
