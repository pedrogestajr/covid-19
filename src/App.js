import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';

import wash_hands from './assets/img/wash-hands.png';
import use_mask from './assets/img/use-mask.png';
import social_distancing from './assets/img/social-distancing.png';
import dna_body from './assets/img/dna-body.png';

function App() {
  const apiUrl = 'https://disease.sh/v3/covid-19/all';

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCases(result.cases);
          setDeaths(result.deaths);
          setRecovered(result.recovered);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <header>
          <div className="container nav-bar">
            <div className="brand">
              <a className="nav-link" href="/">
                <p className="logo">
                  covid-<span className="logo-accent">19</span>
                </p>
              </a>
            </div>

            <div className="nav-main">
              <nav>
                <ul className="nav-list">
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
          </div>
        </header>

        <section id="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Coronavirus Disease <br />
                (COVID-19)
              </h1>
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
                <p className="card-info">{cases.toLocaleString()}</p>
                <h2 className="card-title">Total cases</h2>
              </div>
              <div className="card card-warning">
                <p className="card-info">{deaths.toLocaleString()}</p>
                <h2 className="card-title">Total deaths</h2>
              </div>
              <div className="card card-success">
                <p className="card-info">{recovered.toLocaleString()}</p>
                <h2 className="card-title">Total recovered</h2>
              </div>
            </div>
          </div>
        </section>

        <section id="prevention">
          <div className="container">
            <h1 className="section-title">Prevention</h1>
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
            <h1 className="symptoms-title">Symptoms</h1>
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
              <p className="footer-logo">
                covid-<span className="logo-accent">19</span>
              </p>
            </div>
            <div className="col">
              <p className="footer-text">
                Designed by{' '}
                <span className="logo-accent">
                  <a className="footer-link" href="https://dribbble.com/Mashok">
                    Mashok
                  </a>
                </span>
              </p>
            </div>
            <div className="col">
              <p className="footer-text">
                Developed by{' '}
                <span className="logo-accent">
                  <a
                    className="footer-link"
                    href="https://github.com/pedrogestajr"
                  >
                    Pedro Gesta
                  </a>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
