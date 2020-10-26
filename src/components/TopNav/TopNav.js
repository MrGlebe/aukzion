import React from 'react';
import {Link} from "react-router-dom";
import './top-nav.css';

export const TopNav = () => {
  return (
      <nav className="top-nav-wrapper">
          <ul className="top-nav">
              <li><Link to='/'>Main Page</ Link></li>
              <li><Link to='/car_page'>Car Page</ Link></li>
              <li><Link to='/404'>Some 404 page</ Link></li>
          </ul>
      </nav>
  );
};
