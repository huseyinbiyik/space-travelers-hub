import React from 'react';
import logo from './images/logo.png';

export default function header() {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
