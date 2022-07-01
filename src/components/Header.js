import React from 'react';
import './styles/Header.css';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

export default function header() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header className="App-header">

      <div className="main-wrapper">
        <div className="logo-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="logo-text">
            Space Traveler`s Hub
          </p>
        </div>

        <nav className="App-nav">
          <ul className="App-link-container">
            <li>
              <NavLink
                className="navbar-item"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-item"
                to="/missions"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-item profile"
                to="/profile"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

    </header>

  );
}
