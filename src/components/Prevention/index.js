import React from 'react';

import './Prevention.css';

import wash_hands from '../../assets/img/wash-hands.png';
import use_mask from '../../assets/img/use-mask.png';
import social_distancing from '../../assets/img/social-distancing.png';

function Prevention() {
  return (
    <React.Fragment>
      <section id="prevention" className="prevention">
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
    </React.Fragment>
  );
}

export default Prevention;
