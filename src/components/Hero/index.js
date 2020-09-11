import React from 'react';
import { useEffect, useState } from 'react';

import './Hero.css';

function Hero() {
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
      <React.Fragment>
        <section id="hero" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Coronavirus Disease <br />
                (COVID-19)
              </h1>
              <p className="hero-text">
                COVID-19 is the infectious disease caused by the most recently
                discovered coronavirus. This new virus and disease were unknown
                before the outbreak began in Wuhan, China, in December 2019.
                COVID-19 is now a pandemic affecting many countries globally.
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
      </React.Fragment>
    );
  }
}

export default Hero;
