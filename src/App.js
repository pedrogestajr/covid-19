import React from 'react';

import './App.css';

import wash_hands from './img/wash-hands.png';
import use_mask from './img/use-mask.png';
import social_distancing from './img/social-distancing.png';
import dna_body from './img/dna-body.png';

function App() {
  return (
    <>
      <header>
        <div className="container nav-bar">
          <h1 className="logo">
            covid-<span className="logo-accent">19</span>
          </h1>

          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#prevention">
                  Prevention
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#symptoms">
                  Symptoms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Coronavirus Disease (COVID-19)</h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              illum pariatur praesentium soluta omnis earum deleniti atque
              nostrum velit recusandae sunt, architecto ipsum fugiat quos
              suscipit aliquam quod accusantium mollitia.
            </p>
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              className="hero-link"
            >
              About COVID-19
            </a>
          </div>

          <div className="stats">
            <div className="card card-danger">
              <p className="card-info">3,17,309+</p>
              <h2 className="card-title">Total cases</h2>
            </div>
            <div className="card card-warning">
              <p className="card-info">13,643+</p>
              <h2 className="card-title">Total deaths</h2>
            </div>
            <div className="card card-success">
              <p className="card-info">96,010+</p>
              <h2 className="card-title">Total recovered</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="prevention">
        <div className="container">
          <h1 className="section-title">How To Prevent?</h1>
          <div className="stickers">
            <div className="sticker">
              <h2 className="sticker-title">Wash Your Hands</h2>
              <img
                src={wash_hands}
                alt="washing hands with water and soap"
                className="sticker-img"
              />
            </div>
            <div className="sticker">
              <h2 className="sticker-title">Use Mask</h2>
              <img
                src={use_mask}
                alt="a person wearing a medical mask"
                className="sticker-img"
              />
            </div>
            <div className="sticker">
              <h2 className="sticker-title">Social Distancing</h2>
              <img
                src={social_distancing}
                alt="a group of people keeping distance from each other"
                className="sticker-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="symptoms">
        <div className="container">
          <h1 className="symptoms-title">Common Symptoms</h1>
          <div className="symptoms-flex">
            <ul className="symptoms-list">
              <li className="symptoms-list-item">Fever</li>
              <li className="symptoms-list-item">Dry Cough</li>
              <li className="symptoms-list-item">Tiredness</li>
            </ul>
            <div className="symptoms-box">
              <img className="symptoms-img" src={dna_body} alt="" />
            </div>
            <ul className="symptoms-list">
              <li className="symptoms-list-item">Aches and Pains</li>
              <li className="symptoms-list-item">Sore Throat</li>
              <li className="symptoms-list-item">Diarrhoea</li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-flex">
          <div className="col">
            <p>
              Inspired By <span className="logo-accent">Pixency</span>
            </p>
          </div>
          <div className="col">
            <h1 className="logo">
              covid-<span className="logo-accent">19</span>
            </h1>
          </div>
          <div className="col">
            <p>&#169; 2020 PNGJ</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
