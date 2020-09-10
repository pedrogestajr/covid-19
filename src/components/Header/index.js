import React from 'react';
import './Header.css';

function Header() {
  return (
    <React.Fragment>
      <header className="header">
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
    </React.Fragment>
  );
}

export default Header;
