import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
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
    </React.Fragment>
  );
}

export default Footer;