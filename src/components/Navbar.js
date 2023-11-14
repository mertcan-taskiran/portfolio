import React from 'react';
import Mode from './Mode';

function Navbar() {
  return (
    <nav id='navbar' className="navbar navbar-expand-lg navbar-light fixed-top fw-bold">
      <div className="container">
        <a className="navbar-brand" href="#home"><i style={{ color: '#38B2AC' }}  className="fa-solid fa-house"></i></a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          <Mode />

        </div>   
      </div>
    </nav>
  );
}

export default Navbar;