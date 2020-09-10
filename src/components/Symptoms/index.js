import React from 'react';

import './Symptoms.css';

import dna_body from '../../assets/img/dna-body.png';

function Symptoms() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Symptoms;
