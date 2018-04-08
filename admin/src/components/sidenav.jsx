import React from 'react';
import { Link } from 'react-router-dom'

const SideNav = () => (
  <div id="sidebar" className="active">
    <h1>Pomby</h1>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link" to="/">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Settings">Settings</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Info">Info</Link>
      </li>
    </ul>
  </div>
);

module.exports = SideNav;
